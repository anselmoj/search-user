import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IFollowingData } from '../..'

export interface IGetAllFollowingSuccessDataAction {
  data: {
    list: {
      id: string
      login: string
      avatar_url: string
      html_url: string
    }[]
  }
}

function getAllFollowingSuccess(
  draft: Draft<IFollowingData>,
  action: PayloadAction<IGetAllFollowingSuccessDataAction>,
) {
  draft.getAll.config.errorMessage = ''
  draft.getAll.config.isLoading = false
  draft.getAll.list = action.payload.data.list.map((item) => ({
    id: item.id,
    html_url: item.html_url,
    login: item.login,
    avatar_url: item.avatar_url,
  }))
}

export default getAllFollowingSuccess
