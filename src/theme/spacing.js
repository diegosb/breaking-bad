const RANGE = 8
const getSize = (times) => `${times * RANGE}px`

export default {
  xs: getSize(1),
  sm: getSize(2),
  md: getSize(3),
  lg: getSize(4),
  xl: getSize(5),
}
