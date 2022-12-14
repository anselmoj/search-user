import { BeatLoader } from 'react-spinners'
import colors from '../../../styles/colors'
import { ItemsBodyLoading } from './styles'

function Loading() {
  return (
    <ItemsBodyLoading>
      <BeatLoader color={colors.blue500} size={18} />
    </ItemsBodyLoading>
  )
}

export default Loading
