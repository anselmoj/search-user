import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IProfileData } from '../../index'

export interface IGetAllRequestAction {
  data: {
    login: string
    name: string
    bio: string
    avatar_url: string
    public_repos: number
    following: number
    followers: number
  }
  functions: {
    error: (err: any) => void
  }
}

function getAllRequest(
  draft: Draft<IProfileData>,
  _: PayloadAction<IGetAllRequestAction>,
) {
  draft.getAll.config.errorMessage = ''
  draft.getAll.config.isLoading = true
  draft.getAll.list = []
}

export default getAllRequest
