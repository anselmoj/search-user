import { followerReducers, IFollowerData } from './slices/follower'
import { followingReducers, IFollowingData } from './slices/following'
import { profileReducers, IProfileData } from './slices/home'
import { IRepoData, repoReducers } from './slices/repos'

export interface IApplicationState {
  home: IProfileData
  repo: IRepoData
  follower: IFollowerData
  following: IFollowingData
}

const rootReducers = {
  home: profileReducers,
  repo: repoReducers,
  follower: followerReducers,
  following: followingReducers,
}

export default rootReducers
