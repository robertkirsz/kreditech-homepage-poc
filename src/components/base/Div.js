import styled, { css } from 'styled-components'

import { isAlphaNumeric, withUnit } from 'utils'

const layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

export default styled.div`
  display: ${props => {
    if (props.inline) {
      if (props.block) return 'inline-block'
      else if (props.flex === true) return 'inline-flex'
      else return 'inline'
    } else {
      if (props.flex === true) return 'flex'
      if (props.block) return 'block'
      return 'flex'
    }
  }};

  ${props => {
    if (!props.block || !(props.inline && !props.flex)) {
      return css`
        flex-direction: ${() => {
          if (props.row) return 'row'
          if (props.rowReverse) return 'row-reverse'
          if (props.column) return 'column'
          if (props.columnReverse) return 'column-reverse'
          return 'row'
        }};
        flex-wrap: ${props.wraps ? 'wrap' : 'nowrap'};
        justify-content: ${props.justifyContent || (() => {
          if (props.justifyStart) return 'flex-start'
          if (props.justifyEnd) return 'flex-end'
          if (props.justifyCenter) return 'center'
          if (props.justifyBetween) return 'space-between'
          if (props.justifyAround) return 'space-around'
          if (props.justifyEvenly) return 'space-evenly'
          return 'flex-start'
        })};
        align-items: ${props.alignItems || (() => {
          if (props.itemsStart) return 'flex-start'
          if (props.itemsEnd) return 'flex-end'
          if (props.itemsCenter) return 'center'
          if (props.itemsBaseline) return 'baseline'
          if (props.itemsStretch) return 'stretch'
          return 'stretch'
        })};
        align-content: ${props.alignContent || (() => {
          if (props.contentStart) return 'flex-start'
          if (props.contentEnd) return 'flex-end'
          if (props.contentCenter) return 'center'
          if (props.contentBetween) return 'space-between'
          if (props.contentArouns) return 'space-around'
          if (props.contentStretch) return 'stretch'
          return 'stretch'
        })};
      `
    }
  }}

  align-self: ${props => props.alignSelf || (() => {
    if (props.selfAuto) return 'auto'
    if (props.selfStart) return 'flex-start'
    if (props.selfEnd) return 'flex-end'
    if (props.selfCenter) return 'center'
    if (props.selfBaseline) return 'baseline'
    if (props.selfStretch) return 'stretch'
    return 'auto'
  })};

  ${({ order }) => isAlphaNumeric(order) && `order: ${order};`}

  ${({ flexNone, flex }) => {
    if (flexNone) return 'flex: none;'
    if (isAlphaNumeric(flex)) return css`flex: ${flex};`
  }}

  ${({ absolute, relative }) => {
    if (absolute) return 'position: absolute;'
    if (relative) return 'position: relative;'
  }}

  ${({ width }) => width && css`width: ${withUnit(width)};`}
  ${({ height }) => height && css`height: ${withUnit(height)};`}
  ${({ minWidth }) => minWidth && css`min-width: ${withUnit(minWidth)};`}
  ${({ minHeight }) => minHeight && css`min-height: ${withUnit(minHeight)};`}
  ${({ maxWidth }) => maxWidth && css`max-width: ${withUnit(maxWidth)};`}
  ${({ maxHeight }) => maxHeight && css`max-height: ${withUnit(maxHeight)};`}

  ${({ margin, m }) => (margin || m) && css`margin: ${withUnit(margin || m)};`}
  ${({ mTop }) => mTop && css`margin-top: ${withUnit(mTop)};`}
  ${({ mRight }) => mRight && css`margin-right: ${withUnit(mRight)};`}
  ${({ mBottom }) => mBottom && css`margin-bottom: ${withUnit(mBottom)};`}
  ${({ mLeft }) => mLeft && css`margin-left: ${withUnit(mLeft)};`}

  ${({ padding, p }) => (padding || p) && css`padding: ${withUnit(padding || p)};`}
  ${({ pTop }) => pTop && css`padding-top: ${withUnit(pTop)};`}
  ${({ pRight }) => pRight && css`padding-right: ${withUnit(pRight)};`}
  ${({ pBottom }) => pBottom && css`padding-bottom: ${withUnit(pBottom)};`}
  ${({ pLeft }) => pLeft && css`padding-left: ${withUnit(pLeft)};`}

  ${({ z }) => isAlphaNumeric(z) && css`z-index: ${z};`}

  ${({ listLeft }) => listLeft && css`
    > *:not(:first-child) { margin-left: ${listLeft === true ? '8px' : withUnit(listLeft)}; }
  `}
  ${({ listRight }) => listRight && css`
    > *:not(:last-child) { margin-right: ${listRight === true ? '8px' : withUnit(listRight)}; }
  `}
  ${({ listTop }) => listTop && css`
    > *:not(:first-child) { margin-top: ${listTop === true ? '8px' : withUnit(listTop)}; }
  `}
  ${({ listBottom }) => listBottom && css`
    > *:not(:last-child) { margin-bottom: ${listBottom === true ? '8px' : withUnit(listBottom)}; }
  `}

  ${({ layer }) => layer && layerStyles}
  ${({ square }) => square && css`width: ${withUnit(square)}; height: ${withUnit(square)};`}
  ${({ clickable }) => clickable && 'cursor: pointer;'}
  ${({ noPointerEvents }) => noPointerEvents && css`pointer-events: none;`}

  ${props => props.overlay && css`
    position: ${(props.absolute && 'absolute') || 'relative'};

    &::after {
      content: "";
      ${layerStyles}
      background: ${props.overlay};
      opacity: 0.2;
      pointer-events: none;
    }
  `}
`
