import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './rootReducers'
import rootSagas from './rootSagas'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key:
    process.env.NODE_ENV === 'development'
      ? 'github-search'
      : 'afecb6ad2083069a3c688ccb43b26a3e',
  storage,
  timeout: 1,
}

export const reducers = combineReducers(rootReducers)

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware,
    ),
})

sagaMiddleware.run(rootSagas)
