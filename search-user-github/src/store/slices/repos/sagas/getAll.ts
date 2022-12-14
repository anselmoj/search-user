import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import { call, put } from 'redux-saga/effects'
import { repoActions } from '..'
import EHttpStatusCodes from '../../../../enums/httpStatusCodes'
import helpers from '../../../../helpers'
import httpClient from '../../../../services/httpClient'
import IGetAllRepoResponse from '../../../../services/httpClient/responses/repo/IGetAllRepoResponse'
import { IGetAllRequestAction } from '../reducers/getAll/request'

function* getAll(action: PayloadAction<IGetAllRequestAction>) {
  try {
    const { data, status }: AxiosResponse<IGetAllRepoResponse[]> = yield call(
      httpClient.get,
      `${action.payload.data.login}/repos`,
    )

    if (status === EHttpStatusCodes.NO_CONTENT) {
      yield put(
        repoActions.getAllSuccess({
          data: {
            list: [],
          },
        }),
      )
      return
    }

    yield put(
      repoActions.getAllSuccess({
        data: {
          list: data,
        },
      }),
    )
  } catch (err: any) {
    helpers.errorHandling(err)
    yield put(repoActions.getAllFailure())
  }
}

export default getAll
