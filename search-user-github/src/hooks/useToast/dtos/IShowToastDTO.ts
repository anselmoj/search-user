import { IToastElementMessageProps } from '../../../components/utils/Toast/ToastElement'

type IShowToastDTO = Omit<IToastElementMessageProps, 'id'>

export default IShowToastDTO
