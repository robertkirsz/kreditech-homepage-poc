import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import { buildThresholdList } from 'utils'

import { IntroSection } from './IntroSection'
import { InfoSection } from './InfoSection'
import { NewsSection } from './NewsSection'
import { InvestorsSection } from './InvestorsSection'

export default class Page extends Component {
  state = { intersectionRatios: {} }

  nodes = {}

  observers = {}

  componentDidMount () {
    this.createObservers(this.nodes)
  }

  createObservers = nodes => {
    for (const key in nodes) {
      this.observers[key] = new IntersectionObserver(
        this.handleIntersect(key),
        { threshold: buildThresholdList(10) }
      )
      this.observers[key].observe(nodes[key])
    }
  }

  handleIntersect = node => entries => {
    this.setState({
      intersectionRatios: {
        ...this.state.intersectionRatios,
        [node]: entries[0].intersectionRatio
      }
    })
  }

  render = () => (
    <Fragment>
      <IntroSection
        innerRef={node => (this.nodes.IntroSectionNode = node)}
        intersectionRatio={this.state.intersectionRatios.IntroSectionNode}
      />
      <ThemeProvider theme={{ dark: true }}>
        <InfoSection />
      </ThemeProvider>
      <NewsSection />
      <InvestorsSection />
    </Fragment>
  )
}
