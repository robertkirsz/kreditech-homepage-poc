import { DEFAULT_TITLE } from 'config'

export const isNumber = value => typeof value === 'number'

export const isString = value => typeof value === 'string'

export const isAlphaNumeric = value => isString(value) || isNumber(value)

// Used to support number as size values in styled-components
export const withUnit = value => (isNumber(value) ? `${value}px` : value)

// Used for Intersection Observer API
export const buildThresholdList = steps => {
  const thresholds = []
  for (let i = 1; i <= steps; i++) thresholds.push(i / steps)
  return thresholds
}

export const getPageTitle = (pathname, routes) => {
  const { label } = routes.filter(route => route.label !== 'Home').find(route => route.path === pathname) || {}
  return label ? `${DEFAULT_TITLE} | ${label}` : DEFAULT_TITLE
}
