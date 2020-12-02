import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@font-face {
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body{
    background-color: #F3F7FA;
  }
  body, a {
    font-family: 'Open Sans', Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
}
`
