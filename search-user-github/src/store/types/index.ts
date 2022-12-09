import { store } from '../index'

export type ReduxStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
