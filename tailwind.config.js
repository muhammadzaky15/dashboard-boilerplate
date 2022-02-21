module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
      'NunitoSans': ['Nunito Sans', 'sans-serif']
    },
    extend: {
      spacing: {
        'tinggi': '183px',
        'lebar': '1010px',
        'lebar-berhasil': '803px'

      },
      fontSize: {
        '32px': '32px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px'

      },

      colors: {
        'latar-b': '#F6F9FE',
        'latar-modal': 'rgba(0,0,0,0.4)',
        'warna-btn': '#003366',
        'terkirim': '#EFFFF8',
        't-terkirim': '#28C27D',
        'terjadwal': '#FEF5CB',
        't-terjadwal': '#D17407'
      }
    },
  },
  plugins: [],
}
