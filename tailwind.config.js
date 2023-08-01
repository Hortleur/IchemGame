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
          "primary": "#0E2431",
                    
          "secondary": "#92D577",
                    
          "accent": "#e55039",
                    
          "neutral": "#BD96B8",
                    
          "base-100": "#F1FBFF",
                    
          "info": "#88B0CD",
                    
          "success": "#00C6B0",
                    
          "warning": "#EA9A27",
                    
          "error": "#5D2624",
        },
        ichemDark:{
          "primary": "#CDF6FF",
                    
          "secondary": "#EA9A27",
                    
          "accent": "#e55039",
                    
          "neutral": "#28232f",
                    
          "base-100": "#0E2431",
                    
          "info": "#8eb1e1",
                    
          "success": "#2ee5ae",
                    
          "warning": "#f2b769",
                    
          "error": "#e72918",
        }
      },
    ],
  },
  plugins: [require("daisyui")]
};