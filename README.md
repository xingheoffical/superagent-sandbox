# slug-sandbox

A tiny URL-slug helper. `slugify(title)` turns a human title into a URL slug.

```js
import { slugify } from './src/slug.js'

slugify('Hello, World!') // 'hello-world'
```

## Test

```sh
npm test
```

## Layout

- `src/slug.js` — the implementation
- `test/slug.test.js` — the tests
