const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // Default mode, can be overridden in package.json scripts
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/, // Load and bundle CSS files
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Handle image files
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images", // Output directory for images
              name: "[name].[ext]", // File name format
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new HtmlWebpackPlugin({
      template: "index.html", // HTML template file
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./detail.html", // HTML template for detail page
      filename: "detail.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css", // Output CSS file name
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true, // Tambahkan ini
  },
};
