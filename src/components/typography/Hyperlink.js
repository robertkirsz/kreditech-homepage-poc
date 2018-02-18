import { Text } from 'components'

export const Hyperlink = Text.withComponent('a').extend`
  display: inline-block;

  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-decoration: none;

  cursor: pointer;
  user-select: none;
`
