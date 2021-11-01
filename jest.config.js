let path = require("path");

module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  globals: {
    "vue-jest": {
      pug: {
        basedir: path.resolve(__dirname, ""),
      },
    },
  },
};
