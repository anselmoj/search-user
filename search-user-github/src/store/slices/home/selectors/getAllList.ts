import { IProfile } from '..'
import { ReduxStore } from '../../../types'

function getAllList(state: ReduxStore): IProfile[] {
  return state.home.getAll.list
}

export default getAllList
