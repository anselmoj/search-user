import { PropsWithChildren } from 'react'

import UseToastProvider from './useToast/provider'

// eslint-disable-next-line no-undef
const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <UseToastProvider>{children}</UseToastProvider>
}

export default AppProvider
