import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

body{
    background: ${colors.grey200};
 
}


body, input, textarea, button {
    font: 400 1rem Poppins, sans-serif;
  }


html, body, #root {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items:center;
}

`
