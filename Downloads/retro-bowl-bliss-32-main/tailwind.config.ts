
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				retro: {
					'blue': '#1D2B53',
					'dark-blue': '#0E1A3F',
					'purple': '#7E2553',
					'green': '#008751',
					'yellow': '#FFA300',
					'orange': '#FF6C24',
					'red': '#FF004D',
					'brown': '#AB5236',
					'black': '#000000',
					'dark-gray': '#1A1C2C',
					'gray': '#566C86',
					'light-gray': '#94B0C2',
					'white': '#FFFFFF'
				}
			},
			fontFamily: {
				'pixel': ['"Press Start 2P"', 'cursive'],
				'sans': ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pixel-fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'50%': {
						opacity: '0.5',
						transform: 'scale(0.975)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'pixel-bounce': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'pixel-spin': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.9',
						transform: 'scale(1.05)'
					}
				},
				'button-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						boxShadow: '0 0 0 rgba(255, 0, 77, 0.4)'
					},
					'25%': {
						transform: 'scale(1.03)',
						boxShadow: '0 0 15px rgba(255, 0, 77, 0.5)'
					},
					'50%': {
						transform: 'scale(1.05)',
						boxShadow: '0 0 20px rgba(255, 0, 77, 0.6)'
					},
					'75%': {
						transform: 'scale(1.03)',
						boxShadow: '0 0 15px rgba(255, 0, 77, 0.5)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(255, 163, 0, 0.7), 0 0 10px rgba(255, 163, 0, 0.5), 0 0 15px rgba(255, 163, 0, 0.3)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 10px rgba(255, 163, 0, 0.9), 0 0 20px rgba(255, 163, 0, 0.7), 0 0 30px rgba(255, 163, 0, 0.5)',
						transform: 'scale(1.03)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-100% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'retro-wave': {
					'0%, 100%': {
						transform: 'translateY(0) scale(1)',
						textShadow: '0 0 0 transparent'
					},
					'25%': {
						transform: 'translateY(-5px) scale(1.05)',
						textShadow: '0 0 5px rgba(255, 163, 0, 0.7), 0 0 10px rgba(255, 0, 77, 0.5)'
					},
					'75%': {
						transform: 'translateY(2px) scale(0.98)',
						textShadow: '0 0 3px rgba(255, 163, 0, 0.5), 0 0 7px rgba(255, 0, 77, 0.3)'
					}
				},
				'button-neon-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px #ff004d, 0 0 10px #ff004d, 0 0 15px #ff004d',
						borderColor: 'rgba(255, 0, 77, 0.7)'
					},
					'50%': {
						boxShadow: '0 0 10px #ff004d, 0 0 20px #ff004d, 0 0 30px #ff004d',
						borderColor: 'rgba(255, 0, 77, 1)'
					}
				},
				'button-rainbow-border': {
					'0%': { borderColor: '#ff004d' },
					'25%': { borderColor: '#ffa300' },
					'50%': { borderColor: '#008751' },
					'75%': { borderColor: '#1D2B53' },
					'100%': { borderColor: '#ff004d' }
				},
				'button-scale-bounce': {
					'0%, 100%': { transform: 'scale(1)' },
					'30%': { transform: 'scale(1.03)' },
					'60%': { transform: 'scale(0.97)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-fade-in': 'pixel-fade-in 0.3s ease-out',
				'pixel-bounce': 'pixel-bounce 0.5s ease-in-out infinite',
				'pixel-spin': 'pixel-spin 2s linear infinite',
				'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
				'button-pulse': 'button-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'glow-pulse': 'glow-pulse 2s infinite ease-in-out',
				'shimmer': 'shimmer 3s infinite linear',
				'retro-wave': 'retro-wave 2s infinite ease-in-out',
				'button-neon-glow': 'button-neon-glow 2s infinite',
				'button-rainbow-border': 'button-rainbow-border 4s infinite',
				'button-scale-bounce': 'button-scale-bounce 2s infinite'
			},
			backgroundImage: {
				'pixel-pattern': "url('/pixel-pattern.png')",
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
