# React useCssVar (--\*)

> A tiny hook to interface with CSS custom properties

## Installation

```shell
npm i @shwilliam/react-css-var
```

## Usage

```jsx
import React, {useState} from 'react'
import {useCssVar} from '@shwilliam/react-use-css-var'

const App = () => {
  const [get, set] = useCssVar('--color-bg')

  return (
    <main style={{backgroundColor: 'var(--color-bg)'}}>
      <p>Current bg: {get()}</p>

      <button onClick={() => set('blue')}>Blue</button>
      <button onClick={() => set('red')}>Red</button>
    </main>
  )
}
```

## Development

To start local development, simply install npm dependencies (`npm i`) and run
`npm run dev` to watch ts files in `src/`. Built files can be found in `dist/`.

## Demo

To run the demo, ensure you have run the build script and have a `dist` dir in
your project root. Then run `npm run demo:setup` to copy these to the demo.
Navigate to the demo and install its dependencies (`cd demo && npm i`). You can
now start the demo app locally by running `npm start`.

## Contributing

This project is open to and encourages contributions! Feel free to discuss any
bug fixes/features in the [issues](https://github.com/shwilliam/react-use-css-var/issues).
If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/react-use-css-var)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/react-use-css-var/pull/new/master)
