import { IFollower } from '..'
import { ReduxStore } from '../../../types'

function getAllFollower(state: ReduxStore): IFollower[] {
  return state.follower.getAll.list
}

export default getAllFollower
