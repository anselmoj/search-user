import { ReduxStore } from '../../../types'

function getUserIsError(state: ReduxStore): boolean {
  return state.home.getUser.config.isError
}

export default getUserIsError
