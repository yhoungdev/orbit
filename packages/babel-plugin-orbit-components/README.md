# babel-plugin-orbit-components

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm (scoped)](https://img.shields.io/npm/v/babel-plugin-orbit-components.svg)](https://www.npmjs.com/package/@kiwicom/babel-plugin-orbit-components)

Transforms destructured imports of `@kiwicom/orbit-components` to granular ones!

## Setup

Just add `@kiwicom/orbit-components` to the list of babel plugins, e.g. to `.babelrc`:

```json
{
  "plugins": ["@kiwicom/orbit-components"]
}
```

### Example

```js
// Input:
import { Alert } from "@kiwicom/orbit-components";

// Output:
import Alert from "@kiwicom/orbit-components/lib/Alert";
```

## License

MIT