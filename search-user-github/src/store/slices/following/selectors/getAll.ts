import { IFollowing } from '..'
import { ReduxStore } from '../../../types'

function getAllFollowing(state: ReduxStore): IFollowing[] {
  return state.following.getAll.list
}

export default getAllFollowing
