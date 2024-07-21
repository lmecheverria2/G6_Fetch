import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': '#FF073A',
        'teal-300': '#4fd1c5',
        'yellow-300': '#f6e05e',
      },
    },
  },
  plugins: [],
};

export default config;
