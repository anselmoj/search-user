import { all } from 'redux-saga/effects'
import profileSagas from './slices/home/sagas'
import repoSagas from './slices/repos/sagas'

function* rootSagas() {
  yield all([profileSagas, repoSagas])
}

export default rootSagas
