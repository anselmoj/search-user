import { useState, useEffect } from 'react'
import { FiChevronsLeft } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import pages from '../../components/constants/pages'
import httpClient from '../../services/httpClient'
import { ContainerBackButton, Header, Section, Title } from './styles'

interface IFollowingProps {
  id: string
  login: string
  avatar_url: string
}

function Following() {
  const { user } = useParams()
  const [following, setFollowing] = useState<IFollowingProps[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const data = () => {
      httpClient
        .get<IFollowingProps[]>(`${user}/following`)
        .then((res) => {
          setFollowing(res.data)
        })
        .catch((e) => console.log(e))
    }
    data()
  }, [user])

  const handleGoBack = () => {
    navigate(pages.home)
  }

  return (
    <Section>
      <Header>
        <ContainerBackButton onClick={handleGoBack}>
          <FiChevronsLeft size={26} />
        </ContainerBackButton>

        <Title>Seguindo</Title>
      </Header>
      {following &&
        following.map((follow) => (
          <Card
            key={follow.id}
            username={follow.login}
            image={follow.avatar_url}
          />
        ))}
    </Section>
  )
}

export default Following
