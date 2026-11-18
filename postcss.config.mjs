/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the v4 plugin
    autoprefixer: {},
  },
};

export default config;