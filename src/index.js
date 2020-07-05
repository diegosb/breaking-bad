import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import WebFont from 'webfontloader'
import { ThemeProvider } from 'emotion-theming'

import App from './App'
import globalStyles from './theme/globalStyles'
import theme from './theme'

WebFont.load({
  google: {
    families: ['PT Sans:400,700'],
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
