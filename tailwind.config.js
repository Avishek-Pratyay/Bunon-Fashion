/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Night indigo — inspired by the indigo dye vats of old Bengal
        night: {
          950: "#0D1526",
          900: "#12203B",
          800: "#182C4D",
          700: "#213A63",
          600: "#2C4B7F",
        },
        // Mustard gold — mustard fields, brass jewelry
        mustard: {
          400: "#E4B84A",
          500: "#D4A017",
          600: "#B08412",
        },
        // Brick / madder red — used sparingly, from natural madder-root dye
        brick: {
          500: "#B5473B",
          600: "#9A3A30",
        },
        // Handloom off-white — undyed cotton
        handloom: {
          50: "#F5F3EE",
          100: "#EDEAE1",
          200: "#DDD8C9",
        },
        ink: "#171310",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "weave-lines":
          "repeating-linear-gradient(45deg, rgba(212,160,23,0.08) 0px, rgba(212,160,23,0.08) 1px, transparent 1px, transparent 14px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(13,21,38,0.06), 0 8px 24px -8px rgba(13,21,38,0.12)",
        lift: "0 12px 32px -12px rgba(13,21,38,0.35)",
      },
      transitionTimingFunction: {
        weave: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
