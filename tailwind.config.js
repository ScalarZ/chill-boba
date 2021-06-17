module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./functions/**/*.{js,ts,jsx,tsx},",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      oxanium: ["Oxanium", "cursive"],
      raleway: ["Raleway", "sans-serif"],
      cairo: ["Cairo", "sans-serif"],
    },
    screens: {
      "tablet-min": { min: "640px" },
      // => @media (min-width: 640px) { ... }
      "tablet-max": { max: "640px" },
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        boba0: "boba0 8s linear infinite",
        boba1: "boba1 8s linear 1s infinite",
        boba2: "boba2 8s linear 2s infinite",
        boba3: "boba3 8s linear 3s infinite",
        boba4: "boba4 8s linear 4s infinite",
        boba5: "boba5 8s linear 5s infinite",
        boba6: "boba6 8s linear 6s infinite",
        boba7: "boba7 8s linear 7s infinite",
        boba8: "boba8 8s linear 8s infinite",
        sakura0: "sakura0 8s linear infinite",
        sakura1: "sakura1 8s linear 1s infinite",
        sakura2: "sakura2 8s linear 0.5s infinite",
        sakura3: "sakura3 8s linear 2s infinite",
        sakura4: "sakura4 8s linear 1.5s infinite",
        sakura5: "sakura5 8s linear 2.2s infinite",
        sakura6: "sakura6 8s linear 2.5s infinite",
        sakura7: "sakura7 8s linear 1.8s infinite",
        bears0: "bears0 4s linear infinite",
      },
      keyframes: {
        boba0: {
          "100%": {
            transform: "translate(20px,180px) scale(0.2)",
            opacity: "0",
          },
        },
        boba1: {
          "100%": {
            transform: "translate(20px,180px) scale(0.2)",
            opacity: "0",
          },
        },
        boba2: {
          "100%": {
            transform: "translate(20px,180px) scale(0.2)",
            opacity: "0",
          },
        },
        boba3: {
          "100%": {
            transform: "translate(20px,180px) scale(0.2)",
            opacity: "0",
          },
        },
        boba4: {
          "100%": {
            transform: "translate(20px,180px) scale(0.2)",
            opacity: "0",
          },
        },
        boba5: {
          "100%": {
            transform: "translate(20px,180px) scale(0.2)",
            opacity: "0",
          },
        },
        boba6: {
          "100%": {
            transform: "translate(20px,180px) scale(0.2)",
            opacity: "0",
          },
        },
        boba7: {
          "100%": {
            transform: "translate(20px,180px) scale(0.2)",
            opacity: "0",
          },
        },
        boba8: {
          "100%": {
            transform: "translate(20px,180px) scale(0.2)",
            opacity: "0",
          },
        },
        sakura0: {
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(250px) rotate(-180deg) scale(0.1)",
            opacity: "0",
          },
        },
        sakura1: {
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(250px) rotate(240deg) scale(0.2)",
            opacity: "0",
          },
        },
        sakura2: {
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(250px) rotate(-190deg) scale(0.15)",
            opacity: "0",
          },
        },
        sakura3: {
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(250px) rotate(260deg) scale(0.05)",
            opacity: "0",
          },
        },
        sakura4: {
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(250px) rotate(280deg) scale(0.17)",
            opacity: "0",
          },
        },
        sakura5: {
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(250px) rotate(-300deg) scale(0.1)",
            opacity: "0",
          },
        },
        sakura6: {
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(250px) rotate(210deg) scale(0.2)",
            opacity: "0",
          },
        },
        sakura7: {
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(250px) rotate(-240deg) scale(0.12)",
            opacity: "0",
          },
        },
        sakura8: {
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(250px) rotate(30deg) scale(0.18)",
            opacity: "0",
          },
        },
        bears0: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
