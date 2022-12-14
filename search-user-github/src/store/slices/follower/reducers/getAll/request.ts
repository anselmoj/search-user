import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IFollowerData } from '../..'

export interface IGetAllFollowerRequestAction {
  data: {
    login: string
  }
  functions: {
    error: (err: any) => void
  }
}

function getAllFollowerRequest(
  draft: Draft<IFollowerData>,
  _: PayloadAction<IGetAllFollowerRequestAction>,
) {
  draft.getAll.config.isLoading = true
  draft.getAll.config.isError = false
  draft.getAll.list = []
}

export default getAllFollowerRequest
