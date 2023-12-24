# react-ts-template - A Modern React TypeScript Web App Template

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

This repo serves as a template for starting new web app projects, using React and
TypeScript. It provides sane defaults & tools for linting, tests, and building.

Included tools & technologies are:

- [React](https://react.dev/)
- [ESLint](https://eslint.org/)
- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://typicode.github.io/husky/)

## Structure

**Page** components go into `src/pages/*` and **UI** components into
`src/components/*`. Both pages and components follow the same structure,
consisting of the following files:

- `const.ts` - exports the component `CLASS_NAME` and any other constants
- `props.ts` - provides `defaultProps` and `propTypes`
- `types.ts` - defines an interface for the component propTypes
- `style.scss` - component stylesheet, imported in `index.tsx`
- `index.tsx` - the component itself

### Scripts

- `yarn start`: starts the dev server and opens the index page in a browser
- `yarn build`: builds the application to the `dist` folder for Release
- `yarn format`: runs [Prettier](https://prettier.io/)
- `yarn lint`: runs [ESLint](https://eslint.org/)
- `yarn test`: runs [Jest](https://jestjs.io/)
- `yarn test:coverage`: runs [Jest](https://jestjs.io/) and outputs coverage results
- `yarn test:watch`: runs [Jest](https://jestjs.io/) and runs tests on changes
- `yarn test:snapshots`: runs [Jest](https://jestjs.io/) and updates snapshots
- `yarn update-version`: updates **CHANGELOG.md**, bumps & tags the version
- `yarn prepare`: installs [Husky](https://typicode.github.io/husky/) hooks
- `yarn prepare-release`: lints, tests, and builds
- `yarn release`: runs `prepare-release` and `update-version`

## Release History

See _[CHANGELOG.md](./CHANGELOG.md)_ for more information.

## License

Distributed under the **MIT** license. See [LICENSE.md](./LICENSE.md) for more
information.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

[npm-image]: https://img.shields.io/npm/v/@f3rno64/react-ts-template.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f3rno64/react-ts-template
[npm-downloads]: https://img.shields.io/npm/dm/@f3rno64/react-ts-template.svg?style=flat-square
