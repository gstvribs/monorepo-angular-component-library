<h1 align="center">Your Design System</h1>

> This is a proof of concept of a monorepo structure for serving angular components and design tokens

<p align="center">
  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
  </a>
  <a href="http://commitizen.github.io/cz-cli/">
	  <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitzen friendly" />
  </a>
  <a href="https://conventionalcommits.org">
	  <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits" />
  </a>
</p>

## Getting started

This is a monorepo repository using [Lerna](https://lerna.js.org/), [Commitzen](http://commitizen.github.io/cz-cli/) and [Conventional Commits](https://conventionalcommits.org) to maintain and manage component versions and for documentation, we use [Storybook](https://storybook.js.org/) and [Compodoc](https://compodoc.app/), [access by clicking here](https://ds.gustavoribeiro.dev/storybook/)

List of packages containing in this repository:

| Name of package                       | Description                                                             |
| ------------------------------------- | ----------------------------------------------------------------------- |
| [`@my-org/components`](./components/) | Angular components with each package.json file                          |
| [`@my-org/tokens`](./tokens)          | Design language elements like: colors, typography, iconography and more |

## Setup

Local setup to run this project locally

### Tools:

- Node [version 10.20.1](https://nodejs.org/download/release/v10.21.0/)
  - If you use [nvm](https://github.com/nvm-sh/nvm) just run the command `nvm use` in the root folder

### Configuration

- 1. Install all the dependencies: `npm i`
- 2. You can see the components of this repo by running one of these two projects:
  - 2.1. Angular Playground by running `npm run playground`
  - 2.2. Storybook by running `npm run start:storybook`

## Configuring this project and how to install them at your project

All of these steps above are **already** configured at the project `sandbox` at the path `projects\sandbox` at this repo, this is just an sample.

First of all, your repository needs to be looking at the npm private repository, for that, create a `.npmrc` file at the root of your project and add the private repository:

```
registry = https://registry.npmjs.org/
@my-org:registry=http://localhost:4873/
```

### Installing components

All components in this repository are installed separately, that is, each component has its own npm package, for example if you want to install the button component:

`npm i @my-org/button`

### Installing tokens

This repository has a monorepo that gives you all the tokens of Design System's design language, styles and elements such as: colors, typography, elevations, embroidery, etc. To install just install the package in your repository:

`npm i @my-org/tokens`

In `angular.json` at `styles` node add the global `scss` file.

```json
"styles": [
  "node_modules/@my-org/tokens/bundle/bundle-hard.scss"
]
```
