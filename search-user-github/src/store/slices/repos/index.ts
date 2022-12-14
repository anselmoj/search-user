import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

export interface IRepo {
  id: string
  full_name: string
  description: string
  html_url: string
  owner: {
    avatar_url: string
    login: string
  }
}

export interface IRepoData {
  getAll: {
    config: {
      isError: boolean
      isLoading: boolean
      errorMessage: string
    }
    list: IRepo[]
  }
}

const initialState: IRepoData = {
  getAll: {
    config: {
      isError: false,
      isLoading: false,
      errorMessage: '',
    },
    list: [],
  },
}

const repoSlice = createSlice({
  name: '@repo',
  initialState,
  reducers,
})

export const repoActions = repoSlice.actions
export const repoReducers = repoSlice.reducer
