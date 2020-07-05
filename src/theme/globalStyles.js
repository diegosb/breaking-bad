import { css } from '@emotion/core'
import font from './font'

export default css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${font.family.primary};
    font-size: ${font.size.default};
    font-weight: ${font.weight.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
