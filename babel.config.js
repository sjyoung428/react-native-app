module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@routes": "./src/routes",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@store": "./src/store",
            "@api": "./src/api",
          },
        },
      ],
    ],
    env: {
      // development: {
      //   plugins: ["transform-react-jsx-source"],
      // },
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
