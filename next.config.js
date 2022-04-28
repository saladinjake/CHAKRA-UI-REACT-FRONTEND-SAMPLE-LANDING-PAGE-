const path = require("path");

module.exports = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  basePath: "/out",
  assetPrefix: process.env.BASE_PATH || '',
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  },
};