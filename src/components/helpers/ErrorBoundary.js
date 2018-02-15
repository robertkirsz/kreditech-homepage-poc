import { Component } from 'react'
import PropTypes from 'prop-types'

import { DEFAULT_ERROR_BOUNDARY_MESSAGE } from 'config'

export default class ErrorBoundary extends Component {
  static propTypes = {
    message: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  static defaultProps = { message: DEFAULT_ERROR_BOUNDARY_MESSAGE }

  state = { error: null }

  componentDidCatch = error => this.setState({ error })

  render = () => (this.state.error ? `${this.props.message} ${this.state.error.message}` : this.props.children)
}
