const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const publicPath = "";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: publicPath,
  },
  devtool: "source-map",
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Pizza",
      filename: "index.html",
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "src/assets" }],
    }),
  ],
};
