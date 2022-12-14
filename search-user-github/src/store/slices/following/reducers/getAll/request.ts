import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IFollowingData } from '../..'

export interface IGetAllFollowingRequestAction {
  data: {
    login: string
  }
  functions: {
    error: (err: any) => void
  }
}

function getAllFollowingRequest(
  draft: Draft<IFollowingData>,
  _: PayloadAction<IGetAllFollowingRequestAction>,
) {
  draft.getAll.config.isLoading = true
  draft.getAll.config.isError = false
  draft.getAll.list = []
}

export default getAllFollowingRequest
