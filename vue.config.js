module.exports = {
    devServer: {
      proxy: {
        "/api/*": {
          target: `https://imageuploader-api.herokuapp.com`,
        },
        "/disk/*": {
          target: `https://imageuploader-api.herokuapp.com`
        }
      },
    },
    outputDir: "./docs"
}
