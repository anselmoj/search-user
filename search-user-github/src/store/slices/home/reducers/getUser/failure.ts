import { Draft } from '@reduxjs/toolkit'

import { IProfileData } from '../../index'

function getUserFailure(draft: Draft<IProfileData>) {
  draft.getUser.config.errorMessage = 'Não foi possível carregar o perfil'
  draft.getUser.config.isLoading = false
  draft.getUser.config.isError = true
}

export default getUserFailure
