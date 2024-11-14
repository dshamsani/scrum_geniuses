/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        desktop: "20px",
        mobile: "15px",
      },
      fontFamily: {
        hoefler: ["Crimson Text", "sans-serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        "custom-drop": "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
