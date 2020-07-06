import { css } from '@emotion/core'

export const breakpoints = {
  xs: {
    max: 767,
  },
  sm: {
    min: 768,
    max: 1159,
  },
  md: {
    min: 1160,
    max: 1399,
  },
  lg: {
    min: 1400,
  },
}

export const mq = (from, until) => {
  const emSizeMin = breakpoints[from].min
  const emSizeMax = breakpoints[until].max

  return (...args) => {
    if (emSizeMin && emSizeMax) {
      return css`
        @media only screen and (max-width: ${emSizeMax}px) and (min-width: ${emSizeMin}px) {
          ${css(...args)};
        }
      `
    }
    if (!emSizeMin && emSizeMax) {
      return css`
        @media only screen and (max-width: ${emSizeMax}px) {
          ${css(...args)};
        }
      `
    }
    if (emSizeMin && !emSizeMax) {
      return css`
        @media only screen and (min-width: ${emSizeMin}px) {
          ${css(...args)};
        }
      `
    }
  }
}

export default Object.keys(breakpoints).reduce((media, breakpoint) => {
  const emSizeMin = breakpoints[breakpoint].min
  const emSizeMax = breakpoints[breakpoint].max
  media[breakpoint] = (...args) => {
    if (emSizeMin && emSizeMax) {
      return css`
        @media only screen and (max-width: ${emSizeMax}px) and (min-width: ${emSizeMin}px) {
          ${css(...args)};
        }
      `
    }
    if (!emSizeMin && emSizeMax) {
      return css`
        @media only screen and (max-width: ${emSizeMax}px) {
          ${css(...args)};
        }
      `
    }
    if (emSizeMin && !emSizeMax) {
      return css`
        @media only screen and (min-width: ${emSizeMin}px) {
          ${css(...args)};
        }
      `
    }
  }
  return media
}, {})
