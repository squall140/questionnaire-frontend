module.exports = {
  webpack: {},
  devServer: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
};
