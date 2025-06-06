const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@heroicons/react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A76545",    // Terracotta
        secondary: "#FFA55D",  // Peach
        accent: "#FFDF88",     // Cream
        success: "#ACC572",     // Sage
        'neon-blue': '#6366f1',
        'neon-purple': '#8b5cf6',
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        },
        backdropBlur: {
          'sm': '4px',
        }  
      }
    },
  },
  plugins: [],
};

export default config;
