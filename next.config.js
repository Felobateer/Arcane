/** @type {import('next').NextConfig} */
const nextConfig = {};

const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle .svg files with file-loader
    config.module.rules.push({
      test: /\.svg$/, // Adjust the regular expression to match the file type you want to handle.
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/", // Customize the output path for the files.
            name: "[name].[ext]", // Specify the file name pattern (e.g., [name].[ext])
          },
        },
      ],
    });

    return config;
  },
};
