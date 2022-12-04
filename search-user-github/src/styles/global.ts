import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media screen and (max-width: 720px) {
      font-size: 87.5%;
    }

    @media (min-width: 900px) {
      ::-webkit-scrollbar {
        height: 0.5rem;
        width: 0.4rem;
      }

      ::-webkit-scrollbar-button {
        height: 0;
        width: 0;
      }

      ::-webkit-scrollbar-track {
        height: 0.5rem;
      }

      ::-webkit-scrollbar-thumb {
        height: 0.5rem;
        width: 0.4rem;
        border-radius: 0 0 0.25rem 0.25rem;
      }
    }
  }

body, input, textarea, button {
    font: 400 1rem Poppins, sans-serif;
  }

`
