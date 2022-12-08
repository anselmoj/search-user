import { useState, useEffect } from 'react'
import { FiChevronsLeft } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import httpClient from '../../services/httpClient'
import { ContainerBackButton, Header, Section, Title } from './styles'

interface IUserReposProps {
  id: string
  full_name: string
  description: string
  owner: {
    avatar_url: string
    login: string
  }
}

function Repos() {
  const { user } = useParams()
  const [repos, setRepos] = useState<IUserReposProps[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const data = () => {
      httpClient
        .get<IUserReposProps[]>(`${user}/repos`)
        .then((res) => {
          setRepos(res.data)
        })
        .catch((e) => console.log(e))
    }
    data()
  }, [user])

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Section>
      <Header>
        <ContainerBackButton onClick={handleGoBack}>
          <FiChevronsLeft size={26} />
        </ContainerBackButton>

        <Title>Repositórios</Title>
      </Header>
      {repos &&
        repos.map((repo) => (
          <Card
            key={repo.id}
            username={repo.full_name}
            description={repo.description}
            image={repo.owner.avatar_url}
          />
        ))}
    </Section>
  )
}

export default Repos
