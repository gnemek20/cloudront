const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    port: 80,
    proxy: {
      "/api": {
        target: "https://port-0-cloudack-6g2llfe1pmto.sel3.cloudtype.app/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": '',
        }
      }
    }
  }
})
