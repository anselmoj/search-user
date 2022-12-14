/* eslint-disable no-undef */
import userNotFound from '../../../../assets/utils/not-found-cat.svg'

import { Container, ErrorImage, ErrorMessage } from './styles'

interface IComponentErrorProps {
  message: string
}

const ComponentError: React.FC<IComponentErrorProps> = ({ message }) => {
  return (
    <Container>
      <ErrorImage src={userNotFound} />
      <ErrorMessage>{message}</ErrorMessage>
    </Container>
  )
}

export default ComponentError
