/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pep: {
          primary: '#15a9e9',
          primaryDark: '#0f8dc2',
          secondary: '#0b1b2b',
          secondaryAlt: '#0f2236',
          accent: '#22d3ee',
          accent2: '#f59e0b',
          accent3: '#34d399',
          // neutral greys tuned for dark UI
          gray0: '#0b1020',
          gray1: '#0f1426',
          gray2: '#131a30',
          gray3: '#1b2440',
          gray4: '#253158',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        mona: ['Mona Sans', 'system-ui', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)',
        ring: '0 0 0 6px rgba(21,169,233,0.15)',
      },
      borderRadius: {
        xl: '14px',
        '2xl': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease both',
        'fade-up': 'fadeUp 0.7s ease both',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-soft': 'pulseSoft 2.2s ease-in-out infinite',
        'wiggle': 'wiggle 400ms ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-dissolve': 'pulseDissolve 1.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.95' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseDissolve: {
          '0%': { opacity: '0.2', transform: 'scale(0.96)' },
          '50%': { opacity: '0.6', transform: 'scale(1.02)' },
          '100%': { opacity: '0.2', transform: 'scale(0.96)' },
        },
      },
      backgroundImage: {
        'pep-radial': 'radial-gradient(1200px 700px at 10% -10%, rgba(21,169,233,0.12), transparent), radial-gradient(900px 500px at 100% 10%, rgba(21,169,233,0.08), transparent)',
      }
    },
  },
  plugins: [],
}
