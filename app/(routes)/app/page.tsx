'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ModeToggle } from '@/components/mode-toggle';
import TextCustomizer from '@/components/editor/text-customizer';
import MobileNav from '@/components/ui/mobile-nav';

import { PlusIcon, ReloadIcon } from '@radix-ui/react-icons';
import { Upload, Sparkles, Wand2, Zap, Type } from 'lucide-react';

import { removeBackground } from "@imgly/background-removal";
import ProgressStages from '@/components/ui/progress-stages';


const Page = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isImageSetupDone, setIsImageSetupDone] = useState<boolean>(false);
    const [removedBgImageUrl, setRemovedBgImageUrl] = useState<string | null>(null);
    const [textSets, setTextSets] = useState<Array<any>>([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleUploadImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            await setupImage(imageUrl);
        }
    };

    const setupImage = async (imageUrl: string) => {
        try {
            const imageBlob = await removeBackground(imageUrl);
            const url = URL.createObjectURL(imageBlob);
            setRemovedBgImageUrl(url);
            setIsImageSetupDone(true);
        } catch (error) {
            console.error(error);
        }
    };

    const addNewTextSet = () => {
        const newId = Math.max(...textSets.map(set => set.id), 0) + 1;
        setTextSets(prev => [...prev, {
            id: newId,
            text: 'edit',
            fontFamily: 'Inter',
            top: 0,
            left: 0,
            color: 'white',
            fontSize: 200,
            fontWeight: 800,
            opacity: 1,
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowSize: 4,
            rotation: 0,
            tiltX: 0,
            tiltY: 0,
            letterSpacing: 0
        }]);
    };

    const handleAttributeChange = (id: number, attribute: string, value: any) => {
        setTextSets(prev => prev.map(set => 
            set.id === id ? { ...set, [attribute]: value } : set
        ));
    };

    const duplicateTextSet = (textSet: any) => {
        const newId = Math.max(...textSets.map(set => set.id), 0) + 1;
        setTextSets(prev => [...prev, { ...textSet, id: newId }]);
    };

    const removeTextSet = (id: number) => {
        setTextSets(prev => prev.filter(set => set.id !== id));
    };

    const saveCompositeImage = () => {
        if (!canvasRef.current || !isImageSetupDone) return;
    
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
    
        // Get the preview container dimensions for scaling reference
        const previewContainer = document.querySelector('.min-h-\[740px\]') as HTMLElement;
        const containerWidth = previewContainer?.clientWidth || 700;
        const containerHeight = previewContainer?.clientHeight || 740;
    
        const bgImg = new (window as any).Image();
        bgImg.crossOrigin = "anonymous";
        bgImg.onload = () => {
            // Calculate the display dimensions in the preview container
            const imageAspectRatio = bgImg.width / bgImg.height;
            const containerAspectRatio = containerWidth / containerHeight;
            
            let displayWidth, displayHeight;
            if (imageAspectRatio > containerAspectRatio) {
                // Image is wider - fit to container width
                displayWidth = containerWidth;
                displayHeight = containerWidth / imageAspectRatio;
            } else {
                // Image is taller - fit to container height
                displayHeight = containerHeight;
                displayWidth = containerHeight * imageAspectRatio;
            }
            
            // Set canvas to match the display dimensions exactly
            canvas.width = displayWidth;
            canvas.height = displayHeight;
            
            // Calculate scaling factors
            const scaleX = displayWidth / bgImg.width;
            const scaleY = displayHeight / bgImg.height;
            const scale = Math.min(scaleX, scaleY);
            
            // Center the image on canvas
            const scaledWidth = bgImg.width * scale;
            const scaledHeight = bgImg.height * scale;
            const offsetX = (displayWidth - scaledWidth) / 2;
            const offsetY = (displayHeight - scaledHeight) / 2;
            
            // Clear canvas and draw background image
            ctx.clearRect(0, 0, displayWidth, displayHeight);
            ctx.drawImage(bgImg, offsetX, offsetY, scaledWidth, scaledHeight);
            
            // Draw text with proper scaling
            textSets.forEach(textSet => {
                ctx.save();
                
                // Calculate text size based on preview scaling
                const fontSize = textSet.fontSize * scale * 0.35; // Adjusted scaling factor
                ctx.font = `${textSet.fontWeight} ${fontSize}px ${textSet.fontFamily}`;
                ctx.fillStyle = textSet.color;
                ctx.globalAlpha = textSet.opacity;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Calculate position based on display dimensions
                const x = displayWidth * (textSet.left + 50) / 100;
                const y = displayHeight * (50 - textSet.top) / 100;
    
                ctx.translate(x, y);
                
                // Apply 2D rotation first
                ctx.rotate((textSet.rotation * Math.PI) / 180);
                
                // Apply enhanced 3D tilt effects as 2D approximations
                const tiltXRad = (textSet.tiltX * Math.PI) / 180;
                const tiltYRad = (textSet.tiltY * Math.PI) / 180;
                
                // Enhanced 3D perspective simulation
                // TiltX (rotateX) - horizontal rotation affects vertical perspective
                // TiltY (rotateY) - vertical rotation affects horizontal perspective
                const perspectiveFactor = 800; // More pronounced perspective
                
                // Calculate scaling and skewing for 3D effect
                const scaleXFactor = Math.cos(tiltYRad); // Y tilt affects X scaling
                const scaleYFactor = Math.cos(tiltXRad); // X tilt affects Y scaling
                
                // Enhanced skewing for better 3D appearance
                const skewXFactor = Math.sin(tiltYRad) * 0.7; // More pronounced skew
                const skewYFactor = Math.sin(tiltXRad) * 0.7;
                
                // Apply perspective scaling based on tilt
                const perspectiveScaleX = 1 + (Math.sin(tiltYRad) * 0.3);
                const perspectiveScaleY = 1 + (Math.sin(tiltXRad) * 0.3);
                
                // Apply the enhanced 3D-like transformation matrix
                ctx.transform(
                    scaleXFactor * perspectiveScaleX,  // a: enhanced horizontal scaling
                    skewYFactor,                       // b: enhanced horizontal skewing
                    skewXFactor,                       // c: enhanced vertical skewing  
                    scaleYFactor * perspectiveScaleY,  // d: enhanced vertical scaling
                    0,                                 // e: horizontal translation
                    0                                  // f: vertical translation
                );
    
                // Draw text with letter spacing
                if (textSet.letterSpacing === 0) {
                    ctx.fillText(textSet.text, 0, 0);
                } else {
                    const chars = textSet.text.split('');
                    const scaledLetterSpacing = textSet.letterSpacing * scale * 0.35;
                    let currentX = 0;
                    const totalWidth = chars.reduce((width, char, i) => {
                        const charWidth = ctx.measureText(char).width;
                        return width + charWidth + (i < chars.length - 1 ? scaledLetterSpacing : 0);
                    }, 0);
                    
                    currentX = -totalWidth / 2;
                    
                    chars.forEach((char, i) => {
                        const charWidth = ctx.measureText(char).width;
                        ctx.fillText(char, currentX + charWidth / 2, 0);
                        currentX += charWidth + scaledLetterSpacing;
                    });
                }
                ctx.restore();
            });
    
            // Draw the removed background image overlay
            if (removedBgImageUrl) {
                const removedBgImg = new (window as any).Image();
                removedBgImg.crossOrigin = "anonymous";
                removedBgImg.onload = () => {
                    ctx.drawImage(removedBgImg, offsetX, offsetY, scaledWidth, scaledHeight);
                    triggerDownload();
                };
                removedBgImg.src = removedBgImageUrl;
            } else {
                triggerDownload();
            }
        };
        bgImg.src = selectedImage || '';
    
        function triggerDownload() {
            const dataUrl = canvas.toDataURL('image/png', 1.0);
            const link = document.createElement('a');
            link.download = `text-behind-image-${Date.now()}.png`;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    
    return ( 
        <>
            <motion.div
                className='flex flex-col min-h-screen gradient-background'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.header 
                    className='sticky top-0 z-50 glass border-b border-border/20 flex flex-row items-center justify-between p-3 md:p-5 px-4 md:px-10'
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                    <motion.div 
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <motion.div 
                            className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Wand2 className="w-6 h-6" />
                        </motion.div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                <span className="block md:hidden">Text Behind Image</span>
                                <span className="hidden md:block">Text Behind Image Studio</span>
                            </h2>
                            <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                                Professional text-behind-image editor
                            </p>
                        </div>
                    </motion.div>
                    
                    <div className='flex gap-2 md:gap-4 items-center'>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            accept=".jpg, .jpeg, .png, .webp"
                        />
                        
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button 
                                onClick={handleUploadImage} 
                                size="sm" 
                                className="hidden md:flex md:size-default gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 glow"
                            >
                                <Upload className="w-4 h-4" />
                                Upload
                            </Button>
                        </motion.div>
                        
                        <AnimatePresence>
                            {selectedImage && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button 
                                        onClick={saveCompositeImage} 
                                        size="sm" 
                                        className="hidden md:flex md:size-default gap-2 border-primary/50 hover:bg-primary/10 hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300"
                                        variant="outline"
                                    >
                                        <Upload className="w-4 h-4" />
                                        Save
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        <motion.div
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ModeToggle />
                        </motion.div>
                    </div>
                </motion.header>
                
                <motion.div 
                    className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
                
                <AnimatePresence>
                    {selectedImage ? (
                        <motion.div 
                            className='flex flex-col md:flex-row items-start justify-start gap-6 md:gap-12 w-full flex-1 px-4 md:px-10 mt-8 pb-20 md:pb-8 overflow-auto max-w-7xl mx-auto'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div 
                                className="flex flex-col items-center md:items-start justify-start w-full md:w-1/2 gap-6"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                            <canvas ref={canvasRef} style={{ display: 'none' }} />
                            
                                <motion.div 
                                    className="min-h-[740px] w-full max-w-[700px] p-4 md:p-6 professional-card rounded-2xl relative overflow-hidden hover-lift group"
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {isImageSetupDone ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Image
                                                src={selectedImage} 
                                                alt="Uploaded"
                                                layout="fill"
                                                objectFit="contain" 
                                                objectPosition="center"
                                                className="rounded-lg"
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            className='absolute inset-0 flex flex-col items-center justify-center glass rounded-lg'
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <motion.div 
                                                className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-base md:text-lg font-semibold text-center px-4"
                                                animate={{ scale: [1, 1.05, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                >
                                                    <ReloadIcon className='h-5 w-5 md:h-6 md:w-6 text-primary' /> 
                                                </motion.div>
                                                <span className="text-gradient">Analyzing picture...</span>
                                            </motion.div>
                                            
                                            <ProgressStages isVisible={selectedImage !== null && !isImageSetupDone} />
                                        </motion.div>
                                )}
                                    <AnimatePresence>
                                        {isImageSetupDone && textSets.map((textSet, index) => (
                                            <motion.div
                                                key={textSet.id}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: textSet.opacity, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                style={{
                                                    position: 'absolute',
                                                    top: `${50 - textSet.top}%`,
                                                    left: `${textSet.left + 50}%`,
                                                    transform: `
                                                        translate(-50%, -50%) 
                                                        rotate(${textSet.rotation}deg)
                                                        perspective(1000px)
                                                        rotateX(${textSet.tiltX}deg)
                                                        rotateY(${textSet.tiltY}deg)
                                                    `,
                                                    color: textSet.color,
                                                    textAlign: 'center',
                                                    fontSize: `${textSet.fontSize}px`,
                                                    fontWeight: textSet.fontWeight,
                                                    fontFamily: textSet.fontFamily,
                                                    letterSpacing: `${textSet.letterSpacing}px`,
                                                    transformStyle: 'preserve-3d'
                                                }}
                                            >
                                                {textSet.text}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                    {removedBgImageUrl && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                        >
                                            <Image
                                                src={removedBgImageUrl}
                                                alt="Removed bg"
                                                layout="fill"
                                                objectFit="contain" 
                                                objectPosition="center" 
                                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                            /> 
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>

                            <motion.div 
                                className='flex flex-col w-full md:w-1/2'
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button 
                                        variant={'secondary'} 
                                        onClick={addNewTextSet} 
                                        className="mb-4 hidden md:flex gap-2 professional-card border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                                    >
                                        <motion.div
                                            animate={{ rotate: [0, 90, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <PlusIcon className='w-4 h-4 text-primary'/>
                                        </motion.div>
                                        Add New Text
                                    </Button>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <ScrollArea className="h-[calc(100vh-221px)] md:h-[calc(100vh-201px)] rounded-md border p-2 professional-card custom-scrollbar">
                                        <Accordion type="single" collapsible className="w-full">
                                            {textSets.map((textSet, index) => (
                                                <motion.div
                                                    key={textSet.id}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                >
                                                    <TextCustomizer 
                                                        textSet={textSet}
                                                        handleAttributeChange={handleAttributeChange}
                                                        removeTextSet={removeTextSet}
                                                        duplicateTextSet={duplicateTextSet}
                                                    />
                                                </motion.div>
                                            ))}
                                        </Accordion>
                                    </ScrollArea>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            className='flex items-center justify-center flex-1 w-full p-8 text-center animated-bg'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                        <motion.div 
                            className="max-w-xl space-y-4 professional-card p-6 md:p-8 rounded-3xl hover-lift"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.div 
                                className="flex justify-center mb-6"
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <motion.div 
                                    className="relative"
                                    animate={{ 
                                        rotateY: [0, 360],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ 
                                        rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 2, repeat: Infinity }
                                    }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center glow animate-pulse-glow">
                                        <Wand2 className="w-8 h-8 text-white" />
                                    </div>
                                    <motion.div
                                        className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full"
                                        animate={{ 
                                            scale: [0, 1, 0],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    />
                                    <motion.div
                                        className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary rounded-full"
                                        animate={{ 
                                            scale: [0, 1, 0],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                    />
                                </motion.div>
                            </motion.div>
                            
                            <motion.div 
                                className="space-y-4"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <h1 className="text-2xl md:text-4xl font-bold text-gradient leading-tight">
                                    Create Stunning
                                    <br />
                                    Text Behind Images
                                </h1>
                                
                                <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                                    Professional AI-powered editor for creating breathtaking text-behind-image designs. 
                                    Upload your image and let the magic begin.
                                </p>
                                
                                <motion.div 
                                    className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    {[
                                        { icon: Zap, title: "AI Processing", desc: "Smart background removal" },
                                        { icon: Type, title: "Rich Typography", desc: "Advanced text controls" },
                                        { icon: Sparkles, title: "Pro Effects", desc: "Stunning visual results" }
                                    ].map((feature, index) => (
                                        <motion.div 
                                            key={feature.title}
                                            className="flex flex-col items-center p-3 rounded-xl glass hover-lift group"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <motion.div
                                                className="mb-2 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                                                animate={{ rotate: [0, 5, -5, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                                            >
                                                <feature.icon className="w-5 h-5 text-primary" />
                                            </motion.div>
                                            <h3 className="font-semibold text-xs">{feature.title}</h3>
                                            <p className="text-xs text-muted-foreground text-center">{feature.desc}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                            
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button 
                                    onClick={handleUploadImage} 
                                    size="lg" 
                                    className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transition-all duration-500 glow animate-pulse-glow group"
                                >
                                    <motion.div
                                        className="flex items-center gap-3"
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Upload className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                        Upload an Image
                                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    </motion.div>
                                </Button>
                            </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            
            <MobileNav 
                isVisible={!!selectedImage}
                canSave={!!selectedImage && isImageSetupDone}
                onUpload={handleUploadImage}
                onSave={saveCompositeImage}
                onAddText={addNewTextSet}
            />
        </>
    );
}

export default Page;