import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

export interface IFollowing {
  id: string
  login: string
  avatar_url: string
  html_url: string
}

export interface IFollowingData {
  getAll: {
    config: {
      isError: boolean
      isLoading: boolean
      errorMessage: string
    }
    list: IFollowing[]
  }
}

const initialState: IFollowingData = {
  getAll: {
    config: {
      isError: false,
      isLoading: false,
      errorMessage: '',
    },
    list: [],
  },
}

const followingSlice = createSlice({
  name: '@following',
  initialState,
  reducers,
})

export const followingActions = followingSlice.actions
export const followingReducers = followingSlice.reducer
