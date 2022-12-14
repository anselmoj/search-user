import { Draft } from '@reduxjs/toolkit'
import { IFollowerData } from '../..'

function getAllFollowerFailure(draft: Draft<IFollowerData>) {
  draft.getAll.config.errorMessage = 'Não foi possível carregar os seguidores'
  draft.getAll.config.isLoading = false
}

export default getAllFollowerFailure
