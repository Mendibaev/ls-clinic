/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1180px',
      },
    },
    extend: {
      colors: {
        ink: '#16241F',
        teal: {
          DEFAULT: '#0B5D52',
          deep: '#073D37',
          light: '#E4EFEC',
        },
        paper: '#F4F6F4',
        amber: {
          DEFAULT: '#C8862E',
          deep: '#A8701F',
          light: '#FBEEDC',
        },
        line: '#DCE3DF',
        muted: '#5B6B67',
      },
      fontFamily: {
        display: ['"Spectral"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(22,36,31,0.06), 0 8px 24px -12px rgba(22,36,31,0.12)',
        cardHover: '0 4px 10px rgba(22,36,31,0.08), 0 16px 32px -14px rgba(22,36,31,0.18)',
      },
      borderRadius: {
        card: '0.875rem',
      },
    },
  },
  plugins: [],
}
