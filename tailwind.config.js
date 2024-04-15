/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3f92ff",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#1e2432",

          ".main-btn": {
            padding: "14px 36px",
            "font-size": "16px",
            "font-weight": "600",
            "background-color": "#3f92ff",
            "border-radius": "30px",
            transition: "background-color .5s ease, transform .5s ease",
          },
          ".main-btn:hover": {
            "background-color": "#1872e8",
            transform: "scale(1.05)",
          },
          ".secondary-btn": {
            "font-size": "16px",
            "font-weight": "600",
            color: "#3f92ff",
            border: "2px solid transparent",
            "border-radius": "30px",
            padding: "14px 36px",
            transition: "border 1s ease",
          },
          ".secondary-btn:hover": {
            border: "2px solid #3f92ff",
          },
        },
      },
    ],
  },
};
