/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%), #02191D',
      },
    },
  },
  plugins: [],
}