import React from 'react'

import InternalError from './InternalError'

interface IComponentErrorBoundaryProps {
  children: React.ReactNode
}

interface IStateProps {
  hasError: boolean
}

class ComponentErrorBoundary extends React.Component<
  IComponentErrorBoundaryProps,
  IStateProps
> {
  constructor(props: IComponentErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): IStateProps {
    return { hasError: true }
  }

  render(): React.ReactNode {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return <InternalError />
    }

    return children
  }
}

export default ComponentErrorBoundary
