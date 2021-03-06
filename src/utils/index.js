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
  const { label } =
    routes
      .filter(route => route.label !== 'Home')
      .find(route => route.path === pathname) || {}
  return label ? `${DEFAULT_TITLE} | ${label}` : DEFAULT_TITLE
}

const directions = ['Left', 'Right', 'Top', 'Bottom']

// Returns margin or padding shorthands ('mTop', 'pBottom' etc)
export const createSpaces = type => props => {
  let result = ''

  directions.forEach(direction => {
    const property = props[`${type[0]}${direction}`]

    if (property !== undefined) {
      result += `${type}-${direction.toLowerCase()}: ${withUnit(property)};`
    }
  })

  return result
}

// Returns position values ('top', 'left' etc)
export const createPosition = props => {
  let result = ''

  directions.forEach(direction => {
    const property = props[`${direction.toLowerCase()}`]

    if (property !== undefined) {
      result += `${direction.toLowerCase()}: ${withUnit(property)};`
    }
  })

  return result
}

// Creates list helpers ('listBottom' etc)
export const createLists = props => {
  let result = ''

  directions.forEach((direction, index) => {
    const property = props[`list${direction}`]

    if (property !== undefined) {
      const value = property === true ? '8px' : withUnit(property)
      result += `> *:not(:${
        index % 2 ? 'last' : 'first'
      }-child) { margin-${direction.toLowerCase()}: ${value}; }`
    }
  })

  return result
}

// Resolves when image is loaded
export const preloadImage = src =>
  new Promise(resolve => {
    if (!src) return resolve(false)
    const img = new Image()
    img.onload = resolve(src)
    img.src = src
  })

export const sleep = (time = 10) =>
  new Promise(resolve => setTimeout(resolve, time))
