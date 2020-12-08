const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const bundleOutputDir = "./build";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return [
    {
      entry: ["babel-polyfill", path.resolve(__dirname, "./src/index.js")],
      mode: "production",
      output: {
        filename: "nlp-bundle.js",
        path: path.resolve(bundleOutputDir),
        publicPath: "/",
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"],
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
              {
                loader: "sass-loader",
              },
            ],
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[ext]",
                  outputPath: "fonts/",
                },
              },
            ],
          },
        ],
      },
      resolve: {
        alias: {
          SRC: path.resolve(__dirname, "src"),
        },
        extensions: [".js", ".jsx"],
      },
      devServer: {
        contentBase: bundleOutputDir,
        historyApiFallback: true,
        port: 9000,
      },
      plugins: [
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
        new webpack.DefinePlugin(envKeys),
        new webpack.ProvidePlugin({
          ReactDOM: "react-dom",
          React: "react",
        }),
      ],
    },
  ];
};
