import { all } from 'redux-saga/effects'
import followerSagas from './slices/follower/sagas'
import followingSagas from './slices/following/sagas'
import profileSagas from './slices/home/sagas'
import repoSagas from './slices/repos/sagas'

function* rootSagas() {
  yield all([profileSagas, repoSagas, followerSagas, followingSagas])
}

export default rootSagas
