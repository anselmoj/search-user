import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IRepoData } from '../..'

export interface IGetAllProfileSuccessDataAction {
  data: {
    list: {
      id: string
      full_name: string
      description: string
      html_url: string
      owner: {
        avatar_url: string
        login: string
      }
    }[]
  }
}

function getAllSuccess(
  draft: Draft<IRepoData>,
  action: PayloadAction<IGetAllProfileSuccessDataAction>,
) {
  draft.getAll.config.errorMessage = ''
  draft.getAll.config.isLoading = false
  draft.getAll.list = action.payload.data.list.map((item) => ({
    id: item.id,
    full_name: item.full_name,
    description: item.description,
    html_url: item.html_url,
    owner: item.owner,
  }))
}

export default getAllSuccess
