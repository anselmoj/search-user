import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'

import App from './App'
import { persistStore } from 'redux-persist'
import { store } from './store'

// eslint-disable-next-line no-undef
const Root: React.FC = () => {
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}

export default Root
