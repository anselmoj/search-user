import { ReduxStore } from '../../../types'

function getAllIsLoading(state: ReduxStore): boolean {
  return state.follower.getAll.config.isLoading
}
export default getAllIsLoading
