import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    color: ${theme.colors.primary};
    font: 400 1rem Lato, sans-serif;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

  div, a, img{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  img{
    max-width: 100%;
    height: 100%;
  }

`
