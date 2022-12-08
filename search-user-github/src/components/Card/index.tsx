/* eslint-disable no-undef */
import { Content, Details, Image, Text } from './styles'

interface ICardProps {
  username: string
  description: string
  image: string
}

const Card = ({ username, description, image }: ICardProps): JSX.Element => {
  return (
    <Content>
      <Details>
        <Image src={image} alt="" />
        <div>
          <Text>{username}</Text>
          <Text>{description}</Text>
        </div>
      </Details>
    </Content>
  )
}

export default Card
