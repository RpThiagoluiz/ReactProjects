module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
            '.json',
          ],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@interface': './src/interface',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@services': './src/services',
            '@theme': './src/theme',
            '@routes': './src/routes',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
