SystemJS.config({
  baseURL: 'https://unpkg.com/',
  defaultExtension: true,
  packages: {
    "/": "js"
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    },
    '*.json': {
      loader: 'json'
    },
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17.0.2/umd/react.production.min.js',
    'react-dom': 'react-dom@17.0.2/umd/react-dom.production.min.js',
    'redux': 'redux@4.1.0/dist/redux.js',
    'redux-thunk': 'redux-thunk@2.3.0/dist/redux-thunk.js',
    'react-redux': 'react-redux@7.2.4/dist/react-redux.min.js',
    'css': 'systemjs-plugin-css@latest/css.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/index.js')
.catch(console.error.bind(console));