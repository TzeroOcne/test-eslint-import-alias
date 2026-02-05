// .eslintrc.js example
module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
