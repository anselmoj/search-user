import { Draft } from '@reduxjs/toolkit'
import { IFollowingData } from '../..'

function getAllFollowingFailure(draft: Draft<IFollowingData>) {
  draft.getAll.config.errorMessage = 'Não foi possível carregar os seguidores'
  draft.getAll.config.isLoading = false
}

export default getAllFollowingFailure
