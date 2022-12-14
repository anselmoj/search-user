import { profileReducers, IProfileData } from './slices/home'
import { IRepoData, repoReducers } from './slices/repos'

export interface IApplicationState {
  home: IProfileData
  repo: IRepoData
}

const rootReducers = {
  home: profileReducers,
  repo: repoReducers,
}

export default rootReducers
