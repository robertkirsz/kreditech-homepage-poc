import PropTypes from 'prop-types'
import { css } from 'styled-components'

import { media } from 'styles'
import { Div } from 'components'

const getSize = size => css`
  flex-basis: ${100 / 12 * size}%;
  max-width: ${100 / 12 * size}%;
`

const Col = Div.extend`
  flex: 1 0 0;
  max-width: 100%;
  padding-left: 8px;
  padding-right: 8px;

  ${props => css`
    ${props.small === true && 'flex-basis: auto;'}
    ${Number.isInteger(props.small) ? getSize(props.small) : ''}
    ${Number.isInteger(props.offset) ? `margin-left: ${100 / 12 * props.offset}%;` : ''}
    ${Number.isInteger(props.offsetSmall) ? `margin-left: ${100 / 12 * props.offsetSmall}%;` : ''}
  `}

  ${media.mediumUp`
    padding-left: 12px;
    padding-right: 12px;
    ${props => Number.isInteger(props.medium) && getSize(props.medium)}
    ${props => Number.isInteger(props.offsetMedium) && `margin-left: ${100 / 12 * props.offsetMedium}%;`}
  `}

  ${media.largeUp`
    padding-left: 16px;
    padding-right: 16px;
    ${props => Number.isInteger(props.large) && getSize(props.large)}
    ${props => Number.isInteger(props.offsetLarge) && `margin-left: ${100 / 12 * props.offsetLarge}%;`}
  `}
`

Col.propTypes = {
  small: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  medium: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  large: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  offset: PropTypes.number,
  offsetSmall: PropTypes.number,
  offsetMedium: PropTypes.number,
  offsetLarge: PropTypes.number
}

export default Col
