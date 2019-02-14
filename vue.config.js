const path = require("path");
module.exports = {
  configureWebpack: () => ({
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    }
  }),
  chainWebpack: config => {
    config.plugin("define").tap(args => {
      args[0]["process.env"].BASE_URL = JSON.stringify(process.env.BASE_URL);
      return args;
    });
  }
};