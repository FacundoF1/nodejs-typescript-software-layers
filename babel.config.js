module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', 'minify'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@apiServices': './src/apiServices',
          '@decorators': './src/decorators',
          '@middlewares': './src/middlewares',
          '@routes': './src/routes',
          '@services': './src/services',
          '@app': './src/app.ts'
        }
      }
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]
  ]
};
