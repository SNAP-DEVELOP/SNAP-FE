// {
//   "extends": ["taro/react"],
//   "rules": {
//     "react/jsx-uses-react": "off",
//     "react/react-in-jsx-scope": "off"
//   }
// }
module.exports = {
  extends: ['taro/react', 'airbnb', 'airbnb/hooks', 'prettier'],
  parser: '@typescript-eslint/parser', // ESLint 默认使用 esprima 作为其解析器，也可以在配置文件中指定一个不同的解析器（它必须是一个 Node 模块，且它必须符合 parser interface）
  env: {
      // 要在配置文件里指定环境，使用 env 关键字指定你想启用的环境，并设置它们为 true
      browser: true,
      node: true,
      mocha: true,
      es6: true,
      commonjs: true
  },
  globals: {
      // 要在配置文件中配置全局变量, 对于每个全局变量键，将对应的值设置为 "writable" 以允许重写变量，或 "readonly" 不允许重写变量
      // "Babel": "writable",
      // "React": "writable"
  },
  plugins: [
      // 在配置文件里配置插件时, 可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
      'react',
      'jsx-a11y',
      'react-hooks',
      'import',
      'prettier'
  ],
  rules: {
      // 可以使用 rules 连同错误级别和任何你想使用的选项，在配置文件中进行对airbnb规则的修改
      'jsx-quotes': ['error', 'prefer-single'],
      'class-methods-use-this': 'off',
      'no-unused-expressions': 'off',
      'linebreak-style': ['error', 'windows'],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-use-before-define': ['off', { functions: false }],
      'no-unused-vars': 'off',
      indent: ['error', 4, { SwitchCase: 1 }],
      semi: ['error', 'always', { omitLastInOneLineBlock: true }],
      camelcase: 0, // 关闭必须驼峰命名

      // react rules
      'react/jsx-indent': ['error', 4],
      'react/jsx-indent-props': ['error', 4],
      'react/static-property-placement': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

      // import rules
      'import/extensions': 'off',
      'import/no-unresolved': 'off',

      // prettier rules
      'prettier/prettier': 'error'
  }
};
