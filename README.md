# Laravel Ziggy Generator Webpack
This webpack plugin allow you to keep updated your laravel ziggy routes.
This is a wrapper for webpack around [Tighten](https://github.com/tightenco)'s [ziggy](https://github.com/tightenco/ziggy).

## Requirements
- [ziggy](https://github.com/tightenco/ziggy)

## Usage
Install ziggy (see his [repo](https://github.com/tightenco/ziggy) for more info)
```bash
composer require tightenco/ziggy
```

Install laravel-ziggy-generator-webpack
```bash
//npm
npm install laravel-ziggy-generator-webpack --save

//yarn
yarn add laravel-ziggy-generator-webpack
```

Add to your webpack config
```javascript
const LaravelZiggyGenerator = require('laravel-ziggy-generator-webpack')

...
plugins: [
   new LaravelZiggyGenerator 
]
...
```

## Licence
Under [MIT](LICENSE)
