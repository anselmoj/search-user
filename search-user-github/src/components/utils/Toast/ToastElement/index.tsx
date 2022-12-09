/* eslint-disable no-undef */
import { useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi'

import useToast from '../../../../hooks/useToast'
import ComponentIsVisible from '../../IsVisible'
import { Close, Container, Description, Explain, Title } from './styles'

export interface IToastElementMessageProps {
  description?: string
  id: string
  title: string
  type?: 'success' | 'error' | 'info'
}

interface IToastElementProps {
  message: IToastElementMessageProps
  style: React.CSSProperties
}

const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
}

const ToastElement: React.FC<IToastElementProps> = ({ message, style }) => {
  const { hide: hideToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, hideToast])

  const handleClose = () => {
    hideToast(message.id)
  }

  return (
    <Container key={message.id} style={style} type={message.type}>
      {icons[message.type || 'info']}
      <Description>
        <Title>{message.title}</Title>

        <ComponentIsVisible when={!!message.description}>
          <Explain>{message.description}</Explain>
        </ComponentIsVisible>
      </Description>

      <Close onClick={handleClose} type="button">
        <FiX size={18} />
      </Close>
    </Container>
  )
}

export default ToastElement
