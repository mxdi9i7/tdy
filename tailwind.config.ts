import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-indigo-600)',
        secondary: 'var(--color-orange-600)',
        info: 'var(--color-blue-600)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;

export default config;
