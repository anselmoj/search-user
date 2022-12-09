import { profileReducers, IProfileData } from './slices/home'

export interface IApplicationState {
  home: IProfileData
}

const rootReducers = {
  home: profileReducers,
}

export default rootReducers
