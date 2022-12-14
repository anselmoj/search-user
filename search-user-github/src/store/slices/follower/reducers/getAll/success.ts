import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IFollowerData } from '../..'

export interface IGetAllFollowerSuccessDataAction {
  data: {
    list: {
      id: string
      login: string
      avatar_url: string
      html_url: string
    }[]
  }
}

function getAllFollowerSuccess(
  draft: Draft<IFollowerData>,
  action: PayloadAction<IGetAllFollowerSuccessDataAction>,
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

export default getAllFollowerSuccess
