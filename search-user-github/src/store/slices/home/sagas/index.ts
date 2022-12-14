import { all, takeLatest } from 'redux-saga/effects'

import { profileActions } from '../index'

import getUser from './getUser'

const profileSagas = all([takeLatest(profileActions.getUserRequest, getUser)])

export default profileSagas
