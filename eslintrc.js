// .eslintrc.js
module.exports = {
    "env": {
      "node": true,
      "commonjs": true,
      "es2021": true,
      "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": 12
    },
    "rules": {
      "no-console": "off",
      "prettier/prettier": "error"
    }
  };
  