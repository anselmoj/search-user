import { ReduxStore } from '../../../types'

function getAllIsLoading(state: ReduxStore): boolean {
  return state.following.getAll.config.isLoading
}
export default getAllIsLoading
