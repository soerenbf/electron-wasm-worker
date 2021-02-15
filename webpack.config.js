const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const NodePolyfill = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.worker\.ts?$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              publicPath: './',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
},
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.wasm'],
  },
  experiments: {
    syncWebAssembly: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "./index.html") }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, ".")
    }),
    new NodePolyfill()
  ]
};
