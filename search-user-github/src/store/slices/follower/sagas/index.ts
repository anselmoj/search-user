import { all, takeLatest } from 'redux-saga/effects'
import { followerActions } from '..'
import getAllFollower from './getAllFollower'

const followerSagas = all([
  takeLatest(followerActions.getAllFollowerRequest, getAllFollower),
])

export default followerSagas
