import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import { call, put } from 'redux-saga/effects'
import { followerActions } from '..'
import EHttpStatusCodes from '../../../../enums/httpStatusCodes'
import helpers from '../../../../helpers'
import httpClient from '../../../../services/httpClient'
import IGetAllFollowerResponse from '../../../../services/httpClient/responses/follower/IGetAllFollowerResponse'
import { IGetAllFollowerRequestAction } from '../reducers/getAll/request'

function* getAllFollower(action: PayloadAction<IGetAllFollowerRequestAction>) {
  try {
    const { data, status }: AxiosResponse<IGetAllFollowerResponse[]> =
      yield call(httpClient.get, `${action.payload.data.login}/followers`)

    if (status === EHttpStatusCodes.NO_CONTENT) {
      yield put(
        followerActions.getAllFollowerSuccess({
          data: {
            list: [],
          },
        }),
      )
      return
    }

    yield put(
      followerActions.getAllFollowerSuccess({
        data: {
          list: data,
        },
      }),
    )
  } catch (err: any) {
    helpers.errorHandling(err)
    yield put(followerActions.getAllFollowerFailure())
  }
}

export default getAllFollower
