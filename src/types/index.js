import { shape, string, number, bool, func } from 'prop-types'

import { queries } from 'styles'

export const locationTypes = shape({
  pathname: string,
  search: string,
  hash: string,
  state: shape({}),
  key: string
})

export const media = shape(
  queries.reduce(
    (all, query) => ({ ...all, [query.name]: bool.isRequired }),
    {}
  )
).isRequired

export const historyTypes = shape({
  action: string,
  block: func,
  createHref: func,
  go: func,
  goBack: func,
  goForward: func,
  length: number,
  listen: func,
  location: locationTypes,
  push: func,
  replace: func
})
