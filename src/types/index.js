import { shape, string, bool } from 'prop-types'

export const location = shape({
  pathname: string.isRequired
}).isRequired

// TODO: fetch values from styles.js
export const media = shape({
  smallOnly: bool.isRequired,
  mediumUp: bool.isRequired,
  mediumDown: bool.isRequired,
  largeUp: bool.isRequired
}).isRequired
