let mode = process.env.npm_lifecycle_event;

const path = require("path");

let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }], "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

if (mode === "dev") {
  config.devServer = {
    host: "local-ip",
    hot: true,
    open: {
      app: {
        name: "firefox",
        arguments: ["--private-window"],
      },
    },
    port: 3000,
    static: {
      directory: path.join(__dirname, "public"),
    },
  };
}

if (mode === "build") {
}

module.exports = config;
