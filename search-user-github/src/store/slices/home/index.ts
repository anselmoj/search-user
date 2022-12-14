import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

export interface IProfile {
  login: string
  name: string
  bio: string
  avatar_url: string
  public_repos: number
  following: number
  followers: number
}

export interface IProfileData {
  getUser: {
    config: {
      isError: boolean
      isLoading: boolean
      errorMessage: string
    }
    values: IProfile | null
  }
}

const initialState: IProfileData = {
  getUser: {
    config: {
      isError: false,
      isLoading: false,
      errorMessage: '',
    },
    values: null,
  },
}

const profileSlice = createSlice({
  name: '@home',
  initialState,
  reducers,
})

export const profileActions = profileSlice.actions
export const profileReducers = profileSlice.reducer
