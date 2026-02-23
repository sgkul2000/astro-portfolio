/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: '#050505',
        card: '#121212',
        'terminal-green': '#00FF41',
        'electric-blue': '#3B82F6',
        border: '#1E1E1E',
      },
      dropShadow: {
        green: '0 0 8px #00FF41',
        blue: '0 0 8px #3B82F6',
      },
      boxShadow: {
        'green-glow': '0 0 16px rgba(0, 255, 65, 0.3)',
        'blue-glow': '0 0 16px rgba(59, 130, 246, 0.3)',
        'card-hover': '0 0 0 1px #00FF41, 0 0 20px rgba(0, 255, 65, 0.15)',
      },
    },
  },
  plugins: [],
};
