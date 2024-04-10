module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    quotes: 'off',
    "space-before-blocks": "off",
    "class-methods-use-this": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "import/no-extraneous-dependencies": "off",
    "camelcase": "off"
  },
};
