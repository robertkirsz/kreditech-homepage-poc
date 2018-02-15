import { Component, Children } from 'react'
import PropTypes from 'prop-types'

import { queries } from 'styles'

const getQueryValues = queries =>
  queries.reduce(
    (all, query) => ({ ...all, [query.name]: window.matchMedia(`only screen and ${query.value}`).matches }),
    {}
  )

export default class MediaQueryProvider extends Component {
  static childContextTypes = { media: PropTypes.object }

  state = { media: getQueryValues(queries) }

  getChildContext = () => ({ media: this.state.media })

  componentDidMount () {
    queries.forEach(query => {
      window
        .matchMedia(`only screen and ${query.value}`)
        .addListener(() => this.setState({ media: getQueryValues(queries) }))
    })
  }

  render = () => Children.only(this.props.children)
}
