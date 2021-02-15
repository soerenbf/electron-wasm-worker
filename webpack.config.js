const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const { merge } = require("webpack-merge");

const common = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
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
};

module.exports = [
  merge(common, {
    target: "electron-renderer",
    entry: "./app/index.ts",
    output: {
      filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, "./app/index.html") }),
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, ".")
      }),
    ]
  }),
  merge(common,{
    target: "electron-main",
    entry: "./app/electron.ts",
    output: {
      filename: "electron.js"
    },
  })
];
  