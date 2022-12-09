import { all } from 'redux-saga/effects'
import profileSagas from './slices/home/sagas'

function* rootSagas() {
  yield all([profileSagas])
}

export default rootSagas
