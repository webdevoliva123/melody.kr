/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/elements/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage : {
        'layer': 'linear-gradient(to bottom, rgba(50, 50, 50, 0) 0, rgba(16, 15, 15, .91) 89%, rgba(16, 15, 15, .93) 93%)',
        'light-accent' : 'linear-gradient(to top left,#3d55ef -2500%,#0000 300%)'
      },
      backgroundColor:{
        'primary':'var(--bg-primary)',
        'secondary':'var(--bg-secondary)'
      },
      textColor:{
        'primary':"var(--text-primary)",
        'secondary':"var(--text-secondary)"
      },
      colors:{
        'accent':'#3d55ef',
        'white':'#fff',
        'black' :'#111',
        'dark' : "rgba(255,255,255,0.6)",
        'orange' : "#fc4a1a"
      },
    },
  },
  plugins: [],
}
