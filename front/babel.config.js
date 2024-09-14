module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      ['@babel/plugin-transform-class-static-block'],
      ['@babel/plugin-transform-class-properties', {loose: true}],
      // ...other plugins
    ],
  };
};