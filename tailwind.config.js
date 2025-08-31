/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
        // Custom breakpoints for specific resolutions
        '2xl-1629': '1629px',
        '2xl-1850': '1850px',
        '4xl-2560': '2560px',
      },
      colors: {
        primary: {
          DEFAULT: '#ef0101',
          hover: '#d00101',
        },
        secondary: {
          DEFAULT: '#ddcdc1',
          light: '#ebd457',
        },
        accent: {
          yellow: '#ebd457',
          red: '#ef0101',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'manrope-medium': ['Manrope-Medium', 'sans-serif'],
        'manrope-semibold': ['Manrope-SemiBold', 'sans-serif'],
        'manrope-bold': ['Manrope-Bold', 'sans-serif'],
        'wulkan-display': ['WulkanDisplay', 'serif'],
        'wulkan-display-bold': ['WulkanDisplayBold', 'serif'],
        'wulkan-display-italic': ['WulkanDisplayBlackItalic', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        // Custom font sizes
        '26': '1.625rem',
        '30': '1.875rem',
        '76': '4.75rem',
        '90': '5.625rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '45': '11.25rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '70': '17.5rem',
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '130': '32.5rem',
        '200': '50rem',
        '226': '56.5rem',
        '300': '75rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
      zIndex: {
        '30': '30',
        '40': '40',
        '50': '50',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active'],
      textColor: ['hover', 'focus', 'active'],
      borderColor: ['hover', 'focus', 'active'],
      scale: ['hover', 'focus', 'active'],
      shadow: ['hover', 'focus', 'active'],
    },
  },
}
