import { all, takeLatest } from 'redux-saga/effects'
import { repoActions } from '..'
import getAll from './getAll'

const repoSagas = all([takeLatest(repoActions.getAllRequest, getAll)])

export default repoSagas
