/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garage: {
          darkest: '#0c0d0f',
          dark: '#131417',
          surface: '#1b1d22',
          surfaceElevated: '#24272e',
          border: '#2e323b',
          borderLight: '#3f4450',
          textMuted: '#9aa0aa',
          textLight: '#f3f4f6',
          offwhite: '#f9f8f5',
          cream: '#f2eee6',
          creamborder: '#e3ded3',
          amber: {
            DEFAULT: '#d97706',
            light: '#f59e0b',
            dark: '#b45309',
            muted: '#e07a28',
            glow: 'rgba(217, 119, 6, 0.15)',
          },
          silver: '#cbd5e1',
        }
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Barlow Condensed', 'Barlow', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
