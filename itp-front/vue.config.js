const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // Set the base URL of your application for deployment on GitHub Pages
  publicPath: process.env.NODE_ENV === 'production' ? '/COMP30022-SDGs-Frontend/' : '/',

  // The directory where the production build files will be generated
  outputDir: 'dist',

  // Directory for static assets
  assetsDir: 'assets',

  // Linting on save
  lintOnSave: true,
});