import { ReduxStore } from '../../../types'

function getAllIsLoading(state: ReduxStore): boolean {
  return state.repo.getAll.config.isLoading
}
export default getAllIsLoading
