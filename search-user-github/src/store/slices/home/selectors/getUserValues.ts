import { IProfile } from '..'
import { ReduxStore } from '../../../types'

function getUserValues(state: ReduxStore): IProfile | null {
  return state.home.getUser.values
}

export default getUserValues
