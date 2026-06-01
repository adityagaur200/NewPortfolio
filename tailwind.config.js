/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#5E0ED7",
        ink: "#050505",
        paper: "#f5f2ec",
        mist: "#dbd3f9",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        halo: "0 0 40px rgba(94, 14, 215, 0.18)",
        card: "0 30px 80px rgba(12, 8, 28, 0.18)",
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(circle at 20% 20%, rgba(94, 14, 215, 0.22), transparent 38%), radial-gradient(circle at 80% 10%, rgba(17, 17, 17, 0.9), transparent 32%), radial-gradient(circle at 60% 80%, rgba(94, 14, 215, 0.12), transparent 34%)",
        "mesh-light":
          "radial-gradient(circle at 15% 15%, rgba(94, 14, 215, 0.14), transparent 28%), radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.7), transparent 32%), radial-gradient(circle at 50% 90%, rgba(94, 14, 215, 0.08), transparent 26%)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 24s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        "orbital": "orbital 12s linear infinite",
        "border-shift": "border-shift 6s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(94, 14, 215, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(94, 14, 215, 0.8)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translate3d(-50%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        orbital: {
          "0%": { transform: "rotate(0deg) translateX(12px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(12px) rotate(-360deg)" },
        },
        "border-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
}
