module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module:react-native-dotenv"],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@utils": "./src/utils",
            "@store": "./src/store",
            "@themes": "./src/themes",
            "@layout": "./src/layout",
            "@services": "./src/services",
          },
          extensions: [
            ".js",
            ".jsx",
            ".png",
            ".svg",
            ".json",
            ".html",
            ".pdf",
            ".ts",
            ".tsx",
          ],
        },
      ],
    ],
  };
};
