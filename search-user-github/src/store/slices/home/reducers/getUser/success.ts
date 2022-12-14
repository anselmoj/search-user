import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IProfileData } from '../../index'

export interface IGetUserProfileSuccessDataAction {
  data: {
    login: string
    name: string
    bio: string
    avatar_url: string
    public_repos: number
    following: number
    followers: number
  }
}

function getUserSuccess(
  draft: Draft<IProfileData>,
  action: PayloadAction<IGetUserProfileSuccessDataAction>,
) {
  draft.getUser.config.errorMessage = ''
  draft.getUser.config.isLoading = false
  draft.getUser.values = {
    avatar_url: action.payload.data.avatar_url,
    bio: action.payload.data.bio,
    followers: action.payload.data.followers,
    following: action.payload.data.following,
    login: action.payload.data.login,
    name: action.payload.data.name,
    public_repos: action.payload.data.public_repos,
  }
}

export default getUserSuccess
