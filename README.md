# eslint-config-runroom
![Release version](https://img.shields.io/github/release/runroom/eslint-config-runroom.svg)
[![Build Status](https://travis-ci.org/Runroom/eslint-config-runroom.svg?branch=master)](https://travis-ci.org/Runroom/eslint-config-runroom)

#### An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Runroom Style](https://runroom.es)

## Install

```bash
yarn add --dev @runroom/eslint-config-runroom
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Runroom Style shareable config, first run this:

```bash
yarn install
```

Then, add this to your .eslintrc file:

```
{
  "extends": "@runroom/eslint-config-runroom"
}
```

*Note: We cannot omit the `eslint-config-` prefix since it is used inside a [scoped package](https://docs.npmjs.com/misc/scope).*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## License

MIT. Copyright (c) [Runroom](https://runroom.es).
