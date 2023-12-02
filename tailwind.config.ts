import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "lightblue": "#dcebf3",
      "darkblue": "#34445b",
      "reed": "#eb3b3c",
      "sdarkblue": "#728192",
      "sred": "#de838c",
      "slightblue": " #b1c0cf",
      "qbg":"#e7dbdb",
      "qblue":"#0262b4",
      "white":"#f9f9f9",
      "reeed":"#FF5B4E",
      "mango":"FFCC4F",
      "green":"#A8F37C",


    }
  },
  plugins: [],
}
export default config
