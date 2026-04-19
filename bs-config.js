module.exports = {
  proxy: "localhost:82",
  files: ["docs/**/*.{html,css,js}"],
  port: 5000,
  open: true,
  notify: false,
  reloadDelay: 0,
  watchOptions: {
    ignoreInitial: true,
    ignored: '*.min.js'
  }
};
