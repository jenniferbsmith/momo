import { useState, useEffect, useCallback, useRef } from 'react';

// Performance monitoring hook
export const usePerformance = () => {
  const [metrics, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fidEntry = entry as any; // Cast to any for browser compatibility
          setMetrics(prev => ({ 
            ...prev, 
            fid: fidEntry.processingStart - fidEntry.startTime 
          }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const clsEntry = entry as any; // Cast to any for browser compatibility
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return metrics;
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting;
        setIsIntersecting(intersecting);
        if (intersecting) {
          callback();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [callback, options]);

  return { elementRef, isIntersecting };
};

// Optimized animation hook with reduced motion support
export const useOptimizedAnimation = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Detect low-performance devices
    const connection = (navigator as any).connection;
    const memory = (navigator as any).deviceMemory;
    const cores = navigator.hardwareConcurrency;

    const isLowEnd = (
      (connection && connection.effectiveType && connection.effectiveType.includes('2g')) ||
      (memory && memory < 4) ||
      (cores && cores < 4)
    );

    setIsLowPerformance(isLowEnd);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const getAnimationConfig = useCallback((
    defaultConfig: any,
    reducedConfig?: any
  ) => {
    if (prefersReducedMotion || isLowPerformance) {
      return reducedConfig || {
        ...defaultConfig,
        transition: { duration: 0.01 },
        animate: {}
      };
    }
    return defaultConfig;
  }, [prefersReducedMotion, isLowPerformance]);

  return {
    prefersReducedMotion,
    isLowPerformance,
    getAnimationConfig,
    shouldAnimate: !prefersReducedMotion && !isLowPerformance
  };
};

// Image preloader hook
export const useImagePreloader = (imageSources: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = imageSources.map((src) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => reject(src);
          img.src = src;
        });
      });

      try {
        const loaded = await Promise.allSettled(imagePromises);
        const successful = loaded
          .filter(result => result.status === 'fulfilled')
          .map(result => (result as PromiseFulfilledResult<string>).value);
        
        setLoadedImages(new Set(successful));
      } catch (error) {
        console.error('Error preloading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (imageSources.length > 0) {
      preloadImages();
    } else {
      setIsLoading(false);
    }
  }, [imageSources]);

  return { loadedImages, isLoading };
};

// Debounced resize hook
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttled scroll hook
export const useThrottledScroll = (callback: (scrollY: number) => void, delay: number = 16) => {
  const lastRun = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      if (Date.now() - lastRun.current >= delay) {
        callback(window.scrollY);
        lastRun.current = Date.now();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, delay]);
};

// Memory usage monitoring
export const useMemoryMonitor = () => {
  const [memoryInfo, setMemoryInfo] = useState({
    used: 0,
    total: 0,
    limit: 0
  });

  useEffect(() => {
    const updateMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMemoryInfo({
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
        });
      }
    };

    updateMemory();
    const interval = setInterval(updateMemory, 5000);

    return () => clearInterval(interval);
  }, []);

  return memoryInfo;
};

// Critical resource preloader
export const useCriticalResourcePreloader = () => {
  useEffect(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = '/fonts/inter-var.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = '';
    document.head.appendChild(fontLink);

    // Preload hero image
    const heroImageLink = document.createElement('link');
    heroImageLink.rel = 'preload';
    heroImageLink.href = '/images/hero-bg.webp';
    heroImageLink.as = 'image';
    heroImageLink.type = 'image/webp';
    document.head.appendChild(heroImageLink);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(heroImageLink);
    };
  }, []);
};

export default {
  usePerformance,
  useIntersectionObserver,
  useOptimizedAnimation,
  useImagePreloader,
  useDebounce,
  useThrottledScroll,
  useMemoryMonitor,
  useCriticalResourcePreloader
};
