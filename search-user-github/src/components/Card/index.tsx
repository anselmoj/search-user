/* eslint-disable no-undef */
import { Content, Details, Image, Text } from './styles'

interface ICardProps {
  username: string
  description?: string
  image: string
  route: string
}

const Card = ({
  username,
  description,
  image,
  route,
}: ICardProps): JSX.Element => {
  return (
    <a href={route} target="_blank" rel="noreferrer">
      <Content>
        <Details>
          <Image src={image} alt="" />
          <div>
            <Text>{username}</Text>
            <Text>{description}</Text>
          </div>
        </Details>
      </Content>
    </a>
  )
}

export default Card
