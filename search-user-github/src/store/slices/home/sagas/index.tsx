import { all, takeLatest } from 'redux-saga/effects'

import { profileActions } from '../index'

import getAll from './getAll'

const profileSagas = all([takeLatest(profileActions.getAllRequest, getAll)])

export default profileSagas
