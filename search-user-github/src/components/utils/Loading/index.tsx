import { ClipLoader } from 'react-spinners'
import colors from '../../../styles/colors'
import { ItemsBodyLoading } from './styles'

function Loading() {
  return (
    <ItemsBodyLoading>
      <ClipLoader color={colors.blue500} size={40} />
    </ItemsBodyLoading>
  )
}

export default Loading
