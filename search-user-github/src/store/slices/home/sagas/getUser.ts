import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import { call, put } from 'redux-saga/effects'

import { profileActions } from '..'
import helpers from '../../../../helpers'
import httpClient from '../../../../services/httpClient'
import IGetUserProfileResponse from '../../../../services/httpClient/responses/home/IGetUserProfileResponse'
import { IGetUserRequestAction } from '../reducers/getUser/request'

function* getUser(action: PayloadAction<IGetUserRequestAction>) {
  try {
    const { data }: AxiosResponse<IGetUserProfileResponse> = yield call(
      httpClient.get,
      `/${action.payload.data.search}`,
    )

    yield put(
      profileActions.getUserSuccess({
        data,
      }),
    )
  } catch (err: any) {
    helpers.errorHandling(err)
    yield put(profileActions.getUserFailure())
  }
}

export default getUser
