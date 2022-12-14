import { Draft } from '@reduxjs/toolkit'
import { IRepoData } from '../..'

function getAllFailure(draft: Draft<IRepoData>) {
  draft.getAll.config.errorMessage = 'Não foi possível carregar os repositórios'
  draft.getAll.config.isLoading = false
}

export default getAllFailure
