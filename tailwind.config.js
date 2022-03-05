module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        128: "37.5rem",
      },
      maxWidth: {
        128: "37.5rem",
        "1/2": "50%",
      },
      spacing: {
        "1.5/2": "40%",
      },
      zIndex: {
        higher: "9999",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          primary: "#793EF9",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#2A2E37",

          "base-100": "#000000",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
