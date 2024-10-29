/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
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
