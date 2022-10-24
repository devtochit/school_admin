module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        avatar: "url('/avatar.jpg')",
      },
      colors: {
        'blue-pulse': 'rgba(56, 108, 226, 0.6)',
        'custom-blue': 'rgba(56, 108, 226)',
        'dark-blue': 'rgba(1, 27, 87, 0.75)',
        'lay-black': '#010A1D',
        'lay-white': '#F0F3F5',
        'night-black': 'rgba(6, 13, 28, 1)',
        'night-blue': 'rgba(4, 18, 46, 1)',
        'night-white': '#FFFFFF0F',
        'off-white': 'rgba(246, 248, 251, 1);',
        'overlay-black': 'rgba(0, 0, 0, 0.301)',
        'overlay-dark': 'rgba(0, 0, 0, 0.7)',
        'trans-white': 'rgba(226, 234, 255, 0.04);',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-200px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(200px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        slideOut: {
          '0%': {
            left: '-10px',
            opacity: '0.8',
          },
          '50%': {
            left: '-300px',
            opacity: '0.5',
          },
          '100%': {
            left: '-380px',
            opacity: '0',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(250px)',
            opacity: 0.5,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        beat: {
          '0%': {
            transform: 'scale(0.9)',
            boxShadow:
              '0 0 0 0 rgba(56, 108, 226, 0.5), 0 0 0 0 rgba(56, 108, 226, 0.4)',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow:
              '0 0 0 50px rgba(56, 108, 226, 0), 0 0 0 100px rgba(56, 108, 226, 0)',
          },
          '100%': {
            transform: 'scale(0.9)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s',
        slideIn: 'slideIn 1s',
        slideLeft: 'slideLeft 1s',
        slideOut: 'slideOut 1s',
        slideUp: 'slideUp 2s',
        beat: 'beat 2s infinite',
      },
    },
  },
  plugins: [],
};
