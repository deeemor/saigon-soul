import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wood: {
          DEFAULT: '#8C4014', 
          dark: '#38180A',    
          light: '#C9A685',
          50: '#F5F2EF'
        },
        amber: {
          DEFAULT: '#D98E34', 
          soft: '#EBD4BC'
        },
        cream: '#FAFAF7', 
        stone: '#EBEBE6'
      },
      boxShadow: {
        'soft': '0 20px 60px -15px rgba(56, 24, 10, 0.08)',
        'glow': '0 0 40px -10px rgba(217, 142, 52, 0.3)',
        'float': '0 10px 40px -10px rgba(0,0,0,0.15)'
      },
      letterSpacing: {
        'cinema': '0.3em'
      },
      borderRadius: {
        '4xl': '2.5rem'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
