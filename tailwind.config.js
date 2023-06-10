module.exports = {
  theme: {
    extend: {
      keyframes: {
        blobber: {
          "100%": {
            borderRadius: "48% 52% 68% 32% / 42% 28% 72% 58%",
          },
          "95%": {
            borderRadius: "58% 42% 57% 43% / 53% 45% 55% 47%",
          },
          "90%": {
            borderRadius: "74% 26% 33% 67% / 40% 65% 35% 60%",
          },
          "85%": {
            borderRadius: "55% 45% 57% 43% / 73% 61% 39% 27%",
          },
          "80%": {
            borderRadius: "41% 59% 65% 35% / 73% 50% 50% 27%",
          },
          "75%": {
            borderRadius: "62% 38% 43% 57% / 55% 60% 40% 45%",
          },
          "70%": {
            borderRadius: "75% 25% 47% 53% / 49% 53% 47% 51%",
          },
          "65%": {
            borderRadius: "73% 27% 46% 54% / 54% 47% 53% 46%",
          },
          "60%": {
            borderRadius: "38% 62% 35% 65% / 74% 53% 47% 26%",
          },
          "55%": {
            borderRadius: "28% 72% 37% 63% / 71% 44% 56% 29%",
          },
          "50%": {
            borderRadius: "44% 56% 32% 68% / 69% 26% 74% 31%",
          },
          "45%": {
            borderRadius: "47% 53% 34% 66% / 65% 36% 64% 35%",
          },
          "40%": {
            borderRadius: "57% 43% 49% 51% / 55% 71% 29% 45%",
          },
          "35%": {
            borderRadius: "63% 37% 41% 59% / 35% 38% 62% 65%",
          },
          "30%": {
            borderRadius: "32% 68% 38% 62% / 65% 60% 40% 35%",
          },
          "25%": {
            borderRadius: "66% 34% 25% 75% / 47% 30% 70% 53%",
          },
          "20%": {
            borderRadius: "61% 39% 51% 49% / 57% 58% 42% 43%",
          },
          "15%": {
            borderRadius: "60% 40% 71% 29% / 63% 65% 35% 37%",
          },
          "10%": {
            borderRadius: "69% 31% 71% 29% / 67% 31% 69% 33%",
          },
          "5%": {
            borderRadius: "48% 52% 41% 59% / 66% 37% 63% 34%",
          },
          "0%": {
            borderRadius: "48% 52% 68% 32% / 42% 28% 72% 58%",
          },
        },
      },
      colors: {
        mainBlueHover: "#2b52d0cb",
        fadedBlack: "#000000d9",
        fadedBlue: "#2b52d01a",
        mainBlue: "#2b52d0",
        charcoal: "#2C3E56",
      },
      borderRadius: {
        blob: "48% 52% 68% 32% / 42% 28% 72% 58%",
      },
      animation: {
        blob: "blobber 90s 0s ease-in-out infinite",
      },
    },
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
