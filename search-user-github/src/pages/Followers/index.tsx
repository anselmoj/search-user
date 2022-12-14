import { useState, useEffect } from 'react'
import { FiChevronsLeft } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import pages from '../../components/constants/pages'
import httpClient from '../../services/httpClient'
import { ContainerBackButton, Header, Section, Title } from './styles'

interface IFollowersProps {
  id: string
  login: string
  avatar_url: string
  html_url: string
}

function Follower() {
  const { user } = useParams()
  const [followers, setFollowers] = useState<IFollowersProps[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const data = () => {
      httpClient
        .get<IFollowersProps[]>(`${user}/followers`)
        .then((res) => {
          setFollowers(res.data)
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

        <Title>Seguidores</Title>
      </Header>
      {followers &&
        followers.map((follow) => (
          <Card
            key={follow.id}
            username={follow.login}
            image={follow.avatar_url}
            route={follow.html_url}
          />
        ))}

      {/* <ComponentIsVisible when={isLoading}>
        <Loading />
      </ComponentIsVisible> */}
    </Section>
  )
}

export default Follower