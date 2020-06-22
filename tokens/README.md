# Tokens

This package provides .scss files providing: colors, typography, shadows, spacing and more

## Comments

This package contains the files: `bundle-soft.scss` and `bundle-hard.scss`, those two options are similar, but the difference is: **hard** is the implementation that changes styles directly in HTML elements like: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<p>` and `<a>`, consequently **soft** is the implementation that only provides classes with the prefix **.tokens-**

## Uso

In `angular.json` at `styles` node add the global `scss` file.

```json
"styles": [
  "node_modules/@thedesignsystem/tokens/bundle/bundle-<hard or soft>.scss"
]
```
