/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "../src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
      },
      padding: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        desktop: "20px",
        mobile: "15px",
      },
    },
  },
  plugins: [],
};
