import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import { call, put } from 'redux-saga/effects'
import { followingActions } from '..'
import EHttpStatusCodes from '../../../../enums/httpStatusCodes'
import helpers from '../../../../helpers'
import httpClient from '../../../../services/httpClient'
import IGetAllFollowingResponse from '../../../../services/httpClient/responses/following/IGetAllFollowingResponse'
import { IGetAllFollowingRequestAction } from '../reducers/getAll/request'

function* getAllFollowing(
  action: PayloadAction<IGetAllFollowingRequestAction>,
) {
  try {
    const { data, status }: AxiosResponse<IGetAllFollowingResponse[]> =
      yield call(httpClient.get, `${action.payload.data.login}/following`)

    if (status === EHttpStatusCodes.NO_CONTENT) {
      yield put(
        followingActions.getAllFollowingSuccess({
          data: {
            list: [],
          },
        }),
      )
      return
    }

    yield put(
      followingActions.getAllFollowingSuccess({
        data: {
          list: data,
        },
      }),
    )
  } catch (err: any) {
    helpers.errorHandling(err)
    yield put(followingActions.getAllFollowingFailure())
  }
}

export default getAllFollowing
