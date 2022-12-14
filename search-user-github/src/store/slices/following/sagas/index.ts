import { all, takeLatest } from 'redux-saga/effects'
import { followingActions } from '..'
import getAllFollowing from './getAllFollowing'

const followingSagas = all([
  takeLatest(followingActions.getAllFollowingRequest, getAllFollowing),
])

export default followingSagas
