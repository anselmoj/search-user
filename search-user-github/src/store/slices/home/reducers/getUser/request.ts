import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IProfileData } from '../../index'

export interface IGetUserRequestAction {
  data: {
    search: string
  }
  functions: {
    error: (err: any) => void
  }
}

function getUserRequest(
  draft: Draft<IProfileData>,
  _: PayloadAction<IGetUserRequestAction>,
) {
  draft.getUser.config.isLoading = true
  draft.getUser.values = null
  draft.getUser.config.isError = false
}

export default getUserRequest
