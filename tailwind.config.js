/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      colors: {
        // soft Korean pastel palette
        brand: {
          50:  "#fcfbff",
          100: "#f7f5ff",
          200: "#efe9ff",
          300: "#e4d6ff",
          400: "#c8b6ff",
          500: "#b8a5ff",   // primary accent
          600: "#9a86ff",
          700: "#7a66e8",
          800: "#6353bf",
          900: "#4e4192",
        },
        cream: "#fffaf3",
        ink:   "#2d2a32",
      },
      boxShadow: {
        soft:  "0 8px 30px -12px rgba(0,0,0,.18)",
        card:  "0 10px 34px -18px rgba(0,0,0,.25)",
        float: "0 14px 40px -20px rgba(123, 97, 255, .25)",
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-2px)" } },
        tilt:   { "0%,100%": { transform: "rotate(0deg)" }, "50%": { transform: "rotate(.4deg)" } },
        pulseSoft: { "0%,100%": { opacity: .9 }, "50%": { opacity: 1 } },
      },
      animation: {
        floaty: "floaty 3.2s ease-in-out infinite",
        tilt: "tilt 4.5s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
