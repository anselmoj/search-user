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
  getAll: {
    config: {
      isLoading: boolean
      errorMessage: string
    }
    list: IProfile[]
  }
}

const initialState: IProfileData = {
  getAll: {
    config: {
      isLoading: false,
      errorMessage: '',
    },
    list: [],
  },
}

const profileSlice = createSlice({
  name: '@home',
  initialState,
  reducers,
})

export const profileActions = profileSlice.actions
export const profileReducers = profileSlice.reducer
