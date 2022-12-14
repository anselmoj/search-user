import { ReduxStore } from '../../../types'

function getUserIsLoading(state: ReduxStore): boolean {
  return state.home.getUser.config.isLoading
}

export default getUserIsLoading
