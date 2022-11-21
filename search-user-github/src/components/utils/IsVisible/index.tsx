import React, { PropsWithChildren } from 'react'

interface IComponentIsVisibleProps {
  when: boolean
}

const ComponentIsVisible: React.FC<
  PropsWithChildren<IComponentIsVisibleProps>
> = ({ children, when }) => {
  return <>{when && children}</>
}

export default ComponentIsVisible
