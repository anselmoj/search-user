import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IProfileData } from '../../index'

export interface IGetAllProfileSuccessDataAction {
  data: {
    list: {
      login: string
      name: string
      bio: string
      avatar_url: string
      public_repos: number
      following: number
      followers: number
    }[]
  }
}

function getAllSuccess(
  draft: Draft<IProfileData>,
  action: PayloadAction<IGetAllProfileSuccessDataAction>,
) {
  draft.getAll.config.errorMessage = ''
  draft.getAll.config.isLoading = false
  draft.getAll.list = action.payload.data.list.map((profile) => ({
    login: profile.login,
    name: profile.name,
    avatar_url: profile.avatar_url,
    bio: profile.bio,
    public_repos: profile.public_repos,
    followers: profile.followers,
    following: profile.following,
  }))
}

export default getAllSuccess
