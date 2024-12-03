import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/shadcn/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
				lato: 'lato',
				merriweather: 'merriweather'
			},
			colors: {
				text: {
					black: ""
				},
				background: {
					DEFAULT: 'hsl(var(--background))',
					'1': 'var(--background-1)',
					'2': 'var(--background-2)',
					'3': 'var(--background-3)',
					'4': 'var(--background-4)'
				},
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					'0': 'var(--primary-0)',
					'50': 'var(--primary-50)',
					'100': 'var(--primary-100)',
					'150': 'var(--primary-150)',
					'200': 'var(--primary-200)',
					'300': 'var(--primary-300)',
					'400': 'var(--primary-400)',
					'500': 'var(--primary-500)',
					'600': 'var(--primary-600)',
					'700': 'var(--primary-700)',
					'800': 'var(--primary-800)',
					'850': 'var(--primary-850)',
					'900': 'var(--primary-900)',
					'1000': 'var(--primary-1000)',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				grey: {
					'0': 'var(--grey-0)',
					'50': 'var(--grey-50)',
					'100': 'var(--grey-100)',
					'150': 'var(--grey-150)',
					'200': 'var(--grey-200)',
					'300': 'var(--grey-300)',
					'400': 'var(--grey-400)',
					'500': 'var(--grey-500)',
					'600': 'var(--grey-600)',
					'700': 'var(--grey-700)',
					'800': 'var(--grey-800)',
					'850': 'var(--grey-850)',
					'900': 'var(--grey-900)',
					'950': 'var(--grey-950)',
					'1000': 'var(--grey-1000)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					'0': 'var(--accent-0)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'dash-header': '0 4px 8px 0 hsl(0, 0%, 0%, 0.15)',
				'dash-sidebar-right': '4px 4px 8px 0 hsla(0, 0%, 0%, 0.15)',
				'dash-sidebar-left': '-4px 4px 8px 0 hsla(0, 0%, 0%, 0.15)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		},
		screens: {
			sm: '460px',
			md: '768px',
			lg: '1280px',
			xl: '1440px'
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
