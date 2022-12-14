import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

export interface IFollower {
  id: string
  login: string
  avatar_url: string
  html_url: string
}

export interface IFollowerData {
  getAll: {
    config: {
      isError: boolean
      isLoading: boolean
      errorMessage: string
    }
    list: IFollower[]
  }
}

const initialState: IFollowerData = {
  getAll: {
    config: {
      isError: false,
      isLoading: false,
      errorMessage: '',
    },
    list: [],
  },
}

const followerSlice = createSlice({
  name: '@follower',
  initialState,
  reducers,
})

export const followerActions = followerSlice.actions
export const followerReducers = followerSlice.reducer
