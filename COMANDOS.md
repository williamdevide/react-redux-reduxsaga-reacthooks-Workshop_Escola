// CRIA A ESTRUTURA DE PROJETO REACT NA PASTA ATUAL
npx create-react-app .

// INSTALAR DEPENDÊNCIAS PARA ESLINT E PRETTIER
npm init @eslint/config
  > To check syntax, find problems, and enforce code style
  > JavaScript modules (import/export)
  > React
  ? Yes
  > Browser
  > JavaScript
  ? Yes
  > npm
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

// CRIAR .prettierrc.json
  {
      "trailingComma": "es5",
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true
  }

// CRIAR .editorconfig
  root = true

  [*]
  indent_style = space
  indent_size = 2
  end_of_line = lf
  charset = utf-8
  trim_trailing_whitespace = true
  insert_final_newline = true

// CRIAR .eslintrc.js
  module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-filename-extension': 0,
      'react/jsx-one-expression-per-line': 0,
      'prettier/prettier': 'error',
      'import/prefer-default-export': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  };

////////////////////////////////////////////////////////////////////////////////////

// INSTALAR EXTENSÃO DO VSCODE-STYLED-COMPONENTS
// INSTALAR O STYLED-COMPONENTS
npm i styled-components

// INSTALAR REACT-ICONS (icones para o sistema)
npm i react-icons

// INSTALAR O REACT-ROUTER-DOM (responsável pelo roteamento, gerenciamento de rotas, "substitui o <a href>")
npm i react-router-dom
> nesse projeto a codificação foi com a versão 5. então instalar usando:
npm i react-router-dom@5.2.0

// INSTALAR GERENCIADOR DE HISTÓRICO
npm i history
> nesse projeto a codificação foi com a versão 4. então instalar usando:
npm i history@4.10.1

// INSTALAR PROP-TYPES
npm i prop-types

// INSTALAR REACT-TOASTIFY (gerador de pop-ups para usuário)
npm i react-toastify

// INSTALAR O AXIOS (interpretador de caminhos para execução de requisições GET, POST, PUT, DELETE)
npm i axios

// INSTALAR O REDUX (ação -> reducer -> newState) (responsável pelo uso de actions e reducers)
npm i redux react-redux

// INSTALAR O REDUX SAGA (ação (request) -> saga -> reducer -> newState) (middleware entre o frontend e o backend)
npm i redux-saga

// INSTALAR O REDUX PERSIST
npm i redux-persist

// INSTALAR DOTENV PARA PODER UTILIZAR .ENV
npm i dotenv

// INSTALAR VALIDATOR PARA VALIDAR ENDEREÇOS DE EMAIL
npm i validator

npm install --save-dev @babel/plugin-proposal-private-property-in-object

1. Instalação
    npm i @babel/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier -D

    Instalar também
    npm install --save-dev @babel/preset-react




