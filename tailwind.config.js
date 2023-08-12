/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        ichemLight: {
          "primary": "#1A2D3B",
                    
          "secondary": "#92D577",
                    
          "accent": "#670000",
                    
          "neutral": "#BD96B8",
                    
          "base-100": "#F1FBFF",

          "base-300": "#1A2D3B",
                    
          "info": "#88B0CD",
                    
          "success": "#00C6B0",
                    
          "warning": "#EA9A27",
                    
          "error": "#5D2624",
        }
      },
    ],
  },
  plugins: [require("daisyui")]
};