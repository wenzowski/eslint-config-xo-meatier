# eslint-config-xo-meatier [![Build Status](https://travis-ci.org/wenzowski/eslint-config-xo-meatier.svg?branch=master)](https://travis-ci.org/wenzowski/eslint-config-xo-meatier)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for React to be used with [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo)


## Install

```
$ npm install --save-dev eslint-config-xo-meatier babel-eslint eslint eslint-plugin-babel eslint-plugin-react
```


## Usage

Add some ESLint config to your package.json:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": ["xo-meatier"]
	}
}
```

Or to .eslintrc:

```json
{
  "extends": ["xo-meatier"]
}
```

## Tip

### Use with XO

```
$ npm install --save-dev eslint-config-xo-meatier babel-eslint eslint eslint-plugin-babel eslint-plugin-react
```

```json
{
	"name": "my-awesome-meatier-app",
	"xo": {
		"extends": "xo-meatier"
	}
}
```


## Related

- [eslint-config-xo-react](https://github.com/sindresorhus/eslint-config-xo-react) - ESLint shareable config for React to be used with eslint-config-xo
- [eslint-config-xo-space](https://github.com/sindresorhus/eslint-config-xo-space) - ESLint shareable config for XO with 2-space indent
- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/sindresorhus/xo)
- [meatier](https://github.com/mattkrick/meatier) - A meteor alternative. Like meteor, but meatier

## License

MIT © [Alec Wenzowski](https://wenzowski.com)
