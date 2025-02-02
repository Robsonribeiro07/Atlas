import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
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
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
			  TextColorPrimary: {
				DEFAULT: 'hsl(var(--TextColorPrimary))',
				foreground: 'hsl(var(--TextColorPrimary-foreground))',
			  },
			grayColor: {
				DEFAULT: 'hsl(var(--gray-200))',
			},
			grayColor300: 'hsl(var(--gray-300))',
			backgroundGray: {
				DEFAULT: '#0a0a0a'
			},
			graySkeleton: "hsl(var(--gray-skelton))",
			prioridadeAlta: {
				DEFAULT: 'hsl(var(--prioridade-alta))',
				foreground: 'hsl(var(--prioridade-alta-foreground))'
			},
			prioridadeMedia: {
				DEFAULT: 'hsl(var(--prioridade-media))',
                foreground: 'hsl(var(--prioridade-media-foreground))'
			},
			prioridadeBaixa: {
				DEFAULT: 'hsl(var(--prioridade-baixa))',
                foreground: 'hsl(var(--prioridade-baixa-foreground))'
			},
			prioridadeAltaChecked: {
				DEFAULT: 'hsl(var(--prioridade-alta-checked))',
				foreground: 'hsl(var(--prioridade-alta-checked-foreground))'
			},
			prioridadeMediaChecked: {
				DEFAULT: 'hsl(var(--prioridade-media-checked))',
                foreground: 'hsl(var(--prioridade-media-checked-foreground))'
			},
			prioridadeBaixaChecked: {
				DEFAULT: 'hsl(var(--prioridade-baixa-checked))',
                foreground: 'hsl(var(--prioridade-baixa-checked-foreground))'
			},
			
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
			
  		},
		fontSize: {
			md: "1.5rem"
		},
		fontFamily: {
			poppins: ['var(--font-poppins)', 'sans-serif'],
		  }
		
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
