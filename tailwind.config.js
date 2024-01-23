/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./src/**/*.{vue,ts,js}"
    ],
  theme: {
    extend: {
      keyframes: {
        'changeColor': {
          '0%': {},
          '50%': {backgroundColor: 'rgb(156 163 175)'},
          '100%': {}
        }
      },
      animation: {
        'loading': 'changeColor 500ms infinite',
      },
      boxShadow: {
        "fancy": "0px 1.511px 1.511px -0.755px rgba(0,0,0,0.06)," +
                  "0px 4.532px 4.532px -2.266px rgba(0,0,0,0.06)," +
                  "0px 9.064px 9.064px -4.532px rgba(0,0,0,0.06)," + 
                  "0px 18.128px 18.128px -9.064px rgba(0,0,0,0.06)," +
                  "0px 36.257px 36.257px -18.128px rgba(0,0,0,0.06)",
                  
      },
      fontFamily: {
        'round': ['"SF Pro Rounded"', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
    fontFamily: {
      'sans': ['Geist', 'sans-serif']
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}

