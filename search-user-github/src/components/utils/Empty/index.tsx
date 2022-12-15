/* eslint-disable no-undef */
// import empty from '../../../assets/utils/not-found-cat.svg'
import ComponentIsVisible from '../IsVisible'

import { Container, EmptyImage, EmptyMessage, EmptyThumbnail } from './styles'

interface IComponentEmptyProps {
  message: string
  show: boolean
  image: string
}

const ComponentEmpty: React.FC<IComponentEmptyProps> = ({
  message,
  show,
  image,
}) => {
  return (
    <ComponentIsVisible when={show}>
      <Container>
        <EmptyThumbnail>
          <EmptyImage src={image} />
        </EmptyThumbnail>
        <EmptyMessage>{message}</EmptyMessage>
      </Container>
    </ComponentIsVisible>
  )
}

export default ComponentEmpty
