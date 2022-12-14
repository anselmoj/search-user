import { IRepo } from '..'
import { ReduxStore } from '../../../types'

function getAll(state: ReduxStore): IRepo[] {
  return state.repo.getAll.list
}

export default getAll
