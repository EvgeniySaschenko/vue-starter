let { defineConfig } = require("@vue/cli-service");
let path = require("path");
let config = require("./env.config");

module.exports = defineConfig({
  transpileDependencies: true,

  // Проксируем запросы - чтобы нормально работать с куками
  devServer: {
    proxy: {
      "^/api/": { target: config.serverApi },
    },
  },
  configureWebpack: {
    module: {
      // PUG
      rules: [
        {
          test: /\.pug$/,
          loader: "pug-plain-loader",
          options: {
            basedir: path.resolve(__dirname, "") + "/src",
          },
        },
      ],
    },
  },
});
