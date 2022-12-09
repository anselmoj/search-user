/* eslint-disable no-undef */
import { Transition } from 'react-spring'

import { Container } from './styles'
import ToastElement, { IToastElementMessageProps } from './ToastElement'

interface IToastProps {
  messages?: IToastElementMessageProps[]
}

const Toast: React.FC<IToastProps> = ({ messages = [] }) => {
  return (
    <Container>
      <Transition
        enter={{
          opacity: 1,
          right: '0%',
        }}
        from={{
          opacity: 0,
          right: '-120%',
        }}
        items={messages}
        keys={(message: IToastElementMessageProps) => message.id}
        leave={{
          opacity: 0,
          right: '-120%',
        }}
      >
        {(style, item) => (
          <ToastElement key={item.id} message={item} style={style} />
        )}
      </Transition>
    </Container>
  )
}

export default Toast
