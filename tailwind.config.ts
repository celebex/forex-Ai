import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        futuristic: ['Orbitron', 'system-ui'],
      },
      colors: {
        primary: '#0ff',
        dark: '#090a1a',
        card: '#131646',
        accent: '#53f3ce',
      }
    },
  },
  plugins: [],
};
export default config;
