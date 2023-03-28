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
            "@navigations": "./src/navigations",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@store": "./src/store",
            "@api": "./src/api",
            "@types": "./src/types",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
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
