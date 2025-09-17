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
    			gmv: {
    				blue: '#05487f',
    				gray: '#384145',
    				lime: '#b8e600',
    				'lime-accessible': '#7ba500', // Versão mais escura do lime para melhor contraste
    				'gray-accessible': '#2d3436', // Versão mais escura do gray para melhor contraste
    				white: '#f7f7f7'
    			},
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
    			tech: {
    				blue: 'hsl(var(--tech-blue))',
    				cyan: 'hsl(var(--tech-cyan))',
    				purple: 'hsl(var(--tech-purple))',
    				dark: 'hsl(var(--tech-dark))',
    				'dark-lighter': 'hsl(var(--tech-dark-lighter))',
    				gray: 'hsl(var(--tech-gray))'
    			}
    		},
    		fontFamily: {
    			sans: [
    				'Inter',
    				'system-ui',
    				'sans-serif'
    			],
    			garamond: [
    				'ITC Garamond',
    				'Georgia', 
    				'serif'
    			],
    			neiko: [
    				'Neiko',
    				'Inter',
    				'sans-serif'
    			],
    			halenoir: [
    				'Halenoir Compact',
    				'Inter',
    				'Arial',
    				'sans-serif'
    			],
    			montserrat: [
    				'Montserrat',
    				'sans-serif'
    			],
    			fontspring: [
    				'Fontspring Apparel Display',
    				'sans-serif'
    			],
    			apparel: [
    				'Apparel Regular',
    				'Georgia',
    				'serif'
    			],
    			'noto-jp': [
    				'Noto Sans JP',
    				'sans-serif'
    			]
    		},
    		fontSize: {
    			display: [
    				'4rem',
    				{
    					lineHeight: '1.1',
    					letterSpacing: '-0.02em'
    				}
    			],
    			hero: [
    				'3.5rem',
    				{
    					lineHeight: '1.1',
    					letterSpacing: '-0.02em'
    				}
    			],
    			section: [
    				'2.5rem',
    				{
    					lineHeight: '1.2',
    					letterSpacing: '-0.01em'
    				}
    			]
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
    			'pulse-glow': {
    				'0%, 100%': {
    					boxShadow: '0 0 20px hsl(var(--tech-blue) / 0.3)',
    					transform: 'scale(1)'
    				},
    				'50%': {
    					boxShadow: '0 0 40px hsl(var(--tech-cyan) / 0.5)',
    					transform: 'scale(1.02)'
    				}
    			},
    			'slide-up': {
    				from: {
    					opacity: '0',
    					transform: 'translateY(20px)'
    				},
    				to: {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'fade-in': {
    				from: {
    					opacity: '0'
    				},
    				to: {
    					opacity: '1'
    				}
    			},
    			'scroll-left': {
    				'0%': {
    					transform: 'translateX(0%)'
    				},
    				'100%': {
    					transform: 'translateX(-100%)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
    			'slide-up': 'slide-up 0.5s ease-out',
    			'fade-in': 'fade-in 0.3s ease-out',
    			'scroll-left': 'scroll-left 20s linear infinite'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
