import { AxiosError } from 'axios'
import ToastManager from '../components/utils/Toast/ToastManager'

import EHttpStatusCodes from '../enums/httpStatusCodes'
import IHttpClientError from '../services/httpClient/responses/default/IHttpClientError'

function _httpClientError(err: AxiosError<IHttpClientError>): void {
  const statusHttpCode = err.response?.status

  if (statusHttpCode === EHttpStatusCodes.BAD_REQUEST) {
    const message = err.response?.data.error.message

    ToastManager.show({
      title: message || 'Falha para realizar ação',
      type: 'error',
    })
    return
  }

  if (statusHttpCode === EHttpStatusCodes.CONFLICT) {
    const message = err.response?.data.error.message

    ToastManager.show({
      title: message || 'Falha na requisição',
      type: 'error',
    })
    return
  }

  if (statusHttpCode === EHttpStatusCodes.INTERNAL_SERVER_ERROR) {
    ToastManager.show({
      title: 'Servidor indisponível no momento',
      type: 'error',
    })
  }
}

function _appError(message: string): void {
  ToastManager.show({
    title: message,
    type: 'error',
  })
}

function errorHandling(err: AxiosError): void {
  if (err.isAxiosError) {
    _httpClientError(err)
    return
  }

  _appError(err.message)
}

export default errorHandling
