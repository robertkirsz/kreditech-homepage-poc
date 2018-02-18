import { css, injectGlobal } from 'styled-components'

export const queries = [
  { name: 'smallOnly', value: '(max-width: 639px)' },
  { name: 'mediumUp', value: '(min-width: 640px)' },
  { name: 'mediumDown', value: '(max-width: 1023px)' },
  { name: 'largeUp', value: '(min-width: 1024px)' }
]

// Iterate through all the sizes and create a media template for each one
export const media = queries.reduce(
  (all, query) => ({
    ...all,
    [query.name]: (...args) =>
      css`
        @media only screen and ${query.value} {
          ${css(...args)};
        }
      `
  }),
  {}
)

export const colors = {
  green: '#05CC68',
  yellow: '#FFC41D',
  blue: '#036ADD',
  darkGray: '#363636'
}

injectGlobal`
  @import url('//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600');

  body {
    color: ${colors.darkGray};
    font: 300 16px "Source Sans Pro", sans-serif;
    box-sizing: border-box;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
  }

  * {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  button {
    padding: 0;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
