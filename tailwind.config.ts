import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#0F051D',
      'light-grey': '#7B7583',
      xxx: 'red',
    },
  },
  plugins: [],
};
export default config;
