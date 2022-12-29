let config = {
  development: {
    serverApi: "http://localhost:3000/",
  },
  production: {
    serverApi: "/",
  },
};

module.exports = config[process.env.NODE_ENV];
