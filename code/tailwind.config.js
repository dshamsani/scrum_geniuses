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
        helvetica: ["Arimo", "sans-serif"],
      },
      spacing: {
        desktop: "1350px",
        minHeight: "calc(100vh - 400px)",
      },
      boxShadow: {
        "custom-drop": "0 4px 4px rgba(0, 0, 0, 0.25)",
        "custom-drop-top": "0 -4px 4px rgba(0, 0, 0, 0.25)",
        card: "0 0 10px 5px rgba(0, 0, 0, 0.05), 0 0 60px 10px rgba(197, 197, 197, 0.1)",
      },
    },
  },
  plugins: [],
};
