import { shape, string, bool } from 'prop-types'

import { queries } from 'styles'

export const location = shape({
  pathname: string.isRequired
}).isRequired

export const media = shape(
  queries.reduce(
    (all, query) => ({ ...all, [query.name]: bool.isRequired }),
    {}
  )
).isRequired
