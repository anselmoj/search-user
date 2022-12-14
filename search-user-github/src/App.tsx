import { BrowserRouter } from 'react-router-dom'
import AppProvider from './hooks'
import Routes from './routes'
import ComponentErrorBoundary from './routes/ErrorBoundary'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <AppProvider>
      <ComponentErrorBoundary>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </ComponentErrorBoundary>
    </AppProvider>
  )
}

export default App
