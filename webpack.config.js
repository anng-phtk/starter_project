import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/server/server.js",
  target: "node",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js",
    libraryTarget: "module", // Ensures ES Module output
    module: true, // Enables ESM output
  },
  resolve: {
    extensions: [".js"],
  },
  experiments: {
    outputModule: true, // Enables ES Module output
  },
  externalsType: "module", // Treats externals as ESM instead of CommonJS
  externals: ({ request }, callback) => {
    // Ensures Node.js modules are treated as ESM imports
    if (/^(express|express-ejs-layouts|dotenv|path|fs)$/.test(request)) {
      return callback(null, `import ${request}`);
    }
    callback();
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
