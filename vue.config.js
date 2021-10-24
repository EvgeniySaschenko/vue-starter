let path = require("path");
let config = require("./env.config.js")[process.env.NODE_ENV];

module.exports = {
  // Проксируем запросы - чтобы нормально работать с куками
  devServer: {
    proxy: {
      "^/api/": { target: config.serverApi },
    },
    disableHostCheck: true,
  },
  // Глобальные переменные для SASS
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/style/_variables.sass";  @import "~@/assets/style/_mixins.sass";`,
      },
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
            basedir: path.resolve(__dirname, ""),
          },
        },
      ],
    },
  },
};
