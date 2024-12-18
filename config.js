/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}" ,
        "index.html" ],
    theme: {
      extend: {},
    },
    plugins: [],
}

module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)',
        'custom-gradient2': 'linear-gradient(105.54deg, #A764F4 -2.93%, #DEC2FF 72.14%)',
        'custom-gradient3': 'linear-gradient(105.54deg, #64F4A7 -2.93%, #C2FFDE 72.14%)',
        'custom-gradient4': 'linear-gradient(105.54deg, #F464A7 -2.93%, #FFC2DE 72.14%)',
      },
    },
  },
};



