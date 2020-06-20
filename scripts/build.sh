#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

rm -rf dist

# Generate static storybook + compodoc
mkdir dist
npm run build:storybook
npm run build:docs && mv documentation dist/
