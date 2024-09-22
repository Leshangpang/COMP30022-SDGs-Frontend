const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/COMP30022-SDGs-Frontend/'  // Ensure this matches your GitHub repository name
    : '/',
  outputDir: 'itp-front'  // This specifies that the build output should be in the 'itp-front' folder
})