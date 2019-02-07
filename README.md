# Projeto em React-Native - Listar Repositórios e Organizações do Usuário do Github

##React-Native, Redux, Saga, Ducks Pattern

#Tela Inicial
![Tela Inicial](/assets/tela-1.png)

#Tela Lista de Repositórios Git
![Tela Inicial](/assets/tela-2.png)

#Tela Erro
![Tela Inicial](/assets/tela-3.png)

# Criando um projeto em React-native

```sh
$ react-native init GoNative3Redux
```

# 1 - Criar/Ajustar o arquivo ESLint

.eslintrc.json

```js
{
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react-native/all"],
  "plugins": ["react-native", "jsx-a11y", "import"],
  "env": {
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extesion": [
      "error",
      {
        "extensions": [".jsx", ".js"]
      }
    ],
    "import/prefer-default-export": "off"
  },
  "globals": {
    "__DEV__": true
  },
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": {}
    }
  }
}

```

# 2 - Configurar o editorconfig (existe um plugin do VSCode)

```js
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

# 3 - Configurar o arquivo .babelrc (Root import)

```js
{
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "rootPathSuffix": "src"
      }
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        "babel-plugin-root-import",
        {
          "rootPathSuffix": "src"
        }
      ]
    }
  }
}

```

# 3 - Configurar o Reactotron

3.1 - Criar o arquivo: ReactotronConfig.js, dentro da pasta /src/config

```js
import Reactotron from "reactotron-react-native";

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  console.tron = tron;

  tron.clear();
}
```

# Adicional: Settings do Visual code

```js
{
  //Define o tema do VSCode
  "workbench.colorTheme": "Dracula",

  // Configura tamanho e família da fonte
  "editor.fontSize": 14,
  "editor.lineHeight": 20,
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,

  "workbench.iconTheme": "material-icon-theme",
  "window.zoomLevel": 1,

  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true,

  "emmet.includeLanguages": {
    "nunjucks": "html"
  },
  "git.path": "/usr/bin/git",
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.format.enable": false,
  "git.autofetch": true,
  "colorize.ignore_search_variables_info": true
}

```

# Instalando o Redux e o React-Redux

```sh
$ yarn add redux react-redux
```

### 1 - Criar uma pasta store, dentro do src>store

### 2 - Criar o arquivo index.js

# Instalar o babel-plugin-module-resolver

```sh
$ yarn add babel-plugin-module-resolver
```

### Quando acontecer o erro de No Bundle URL

```sh
$ rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios --simulator "iPhone XS Max"
```

# Instalar o babel-plugin-module-resolver

```sh
$ yarn add prop-types
```

# Instalar o plugin do Reactotron para o Redux

```sh
$ yarn add reactotron-redux
```

## Instalando as Rotas do React-Native:

```sh
$ yarn add react-navigation
```

```sh
$ yarn add react-native-gesture-handler
```

```sh
$ react-native link react-native-gesture-handler
```

# Plugin que trabalha com cores

```sh
$ yarn add color
```

### Exemplo de utilização do Colors

# primaryDark: Color("#6550B7").darken(0.1)

# Instalando o Axios e Redux-Saga para requisições api

```sh
$ yarn add axios redux-saga
```

# Instalando o plugin do Reactotron para o Redux-Saga

```sh
$ yarn add reactotron-redux-saga
```
