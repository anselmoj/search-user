import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import { call, put } from 'redux-saga/effects'

import { profileActions } from '..'
import EHttpStatusCodes from '../../../../enums/httpStatusCodes'
import helpers from '../../../../helpers'
import httpClient from '../../../../services/httpClient'
import IGetAllProfileRequest from '../../../../services/httpClient/request/home/IGetAllProfileRequest'
import IGetAllProfileResponse from '../../../../services/httpClient/responses/home/IGetAllProfileResponse'
import { IGetAllRequestAction } from '../reducers/getAll/request'

function* getAll(action: PayloadAction<IGetAllRequestAction>) {
  try {
    const params: IGetAllProfileRequest = {
      name: action.payload.data.name ? action.payload.data.name : undefined,
      login: action.payload.data.login ? action.payload.data.login : undefined,
      bio: action.payload.data.bio ? action.payload.data.bio : undefined,
      avatar_url: action.payload.data.avatar_url
        ? action.payload.data.bio
        : undefined,
      following: action.payload.data.following
        ? action.payload.data.following
        : undefined,
      followers: action.payload.data.followers
        ? action.payload.data.followers
        : undefined,
    }

    const {
      data: { list },
      status,
    }: AxiosResponse<IGetAllProfileResponse> = yield call(httpClient.get, '/', {
      params,
    })

    if (status === EHttpStatusCodes.NO_CONTENT) {
      yield put(
        profileActions.getAllSuccess({
          data: {
            list: [],
          },
        }),
      )
      return
    }

    yield put(
      profileActions.getAllSuccess({
        data: {
          list,
        },
      }),
    )
  } catch (err: any) {
    helpers.errorHandling(err)
    yield put(profileActions.getAllFailure())
  }
}

export default getAll
