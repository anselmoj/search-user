import { Draft } from '@reduxjs/toolkit'

import { IProfileData } from '../../index'

function getAllFailure(draft: Draft<IProfileData>) {
  draft.getAll.config.errorMessage = 'Não foi possível carregar o perfil'
  draft.getAll.config.isLoading = false
}

export default getAllFailure
