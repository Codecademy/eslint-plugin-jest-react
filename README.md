<div align="center">
  <a href="https://eslint.org">
    <img width="150" height="150" src="https://eslint.org/assets/img/logo.svg">
  </a>
  <a href="https://facebook.github.io/jest">
    <img width="150" height="150" src="https://jestjs.io/img/jest.png">
  </a>
  <a href="https://reactjs.org">
    <img width="150" height="150" src="https://static-assets.codecademy.com/engineering/opensource/react.png">
  </a>
  <h1>eslint-plugin-jest-react</h1>
  <p>ESLint plugin for Jest with React</p>
</div>

> Separately, have you tried the [community ESLint Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest)?

## Installation

```shell
yarn add --dev eslint eslint-plugin-jest-react
```

## Usage

Add `jest-react` to the plugins section of your ESLint configuration file.

```js
{
  plugins: ["jest-react"];
}
```

## Rules

We recommend extending from `plugin:jest-react/recommended`:

```js
{
  "extends": ["plugin:jest-react/recommended"]
}
```

If you want more fine control over the rules, you may configure them individually per [ESLint's Configuring Rules docs](https://eslint.org/docs/user-guide/configuring#configuring-rules):

```js
{
  "rules": {
    "jest-react/no-mocking-react": "warn"
  }
}
```

## Contribution Guidelines

We'd love to have you contribute!
Check the [issue tracker](https://github.com/Codecademy/eslint-plugin-jest-react/issues) for issues labeled [`accepting prs`](https://github.com/Codecademy/eslint-plugin-jest-react/labels/status%3A%20accepting%20prs) to find bug fixes and feature requests the community can work on.
If this is your first time working with this code, the [`good first issue`](https://github.com/Codecademy/eslint-plugin-jest-react/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+) label indicates good introductory issues.

Please note that this project is released with a [Contributor Covenant](https://www.contributor-covenant.org).
By participating in this project you agree to abide by its terms.
See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
