import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IRepoData } from '../..'

export interface IGetAllRequestAction {
  data: {
    login: string
  }
  functions: {
    error: (err: any) => void
  }
}

function getAllRequest(
  draft: Draft<IRepoData>,
  _: PayloadAction<IGetAllRequestAction>,
) {
  draft.getAll.config.isLoading = true
  draft.getAll.config.isError = false
  draft.getAll.list = []
}

export default getAllRequest
