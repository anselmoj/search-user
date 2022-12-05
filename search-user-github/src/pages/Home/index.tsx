import { FiSearch, FiX } from 'react-icons/fi'
import { useState } from 'react'
import {
  SearchButton,
  Container,
  ContainerApp,
  UserBio,
  UserImage,
  UserText,
  Form,
  GeneralContainer,
  ContentHeader,
  Input,
  TextHeader,
  TitleHeader,
  ContainerInfo,
  ContainerStats,
  ContentStats,
  NumberStats,
  TextStats,
  ClearButton,
  UserNotFundImage,
  EmptyThumbnail,
  EmptyMessage,
} from './styles'
import ComponentIsVisible from '../../components/utils/IsVisible'
import httpClient from '../../services/httpClient'
import userNotFound from '../../assets/utils/not-found-cat.svg'

interface IUserProps {
  name: string
  bio: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
}

type GitHubResponse = {
  name: string
  bio: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
}

function Home() {
  const [search, setSearch] = useState<string>('')
  const [user, setUser] = useState<IUserProps | null>(null)
  const [error, setError] = useState<boolean>(false)

  const handleSearch = () => {
    setUser(null)
    httpClient
      .get<GitHubResponse>(`${search}`)
      .then((res) => {
        if (!res.data.name) {
          setError(true)
        } else {
          setUser(res.data)
        }
      })
      .catch((err) => {
        setError(true)
        return err
      })
  }

  const handleClear = () => {
    setSearch('')
    setUser(null)
    setError(false)
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <GeneralContainer>
      <ContainerApp>
        <Container>
          <TitleHeader>
            <TextHeader>GitHub Profile</TextHeader>
          </TitleHeader>
          <ContentHeader>
            <Form>
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Digite um usuário"
                onKeyPress={handleKeyPress}
              />
              <ClearButton onClick={handleClear}>
                <FiX size={15} />
              </ClearButton>
              <SearchButton onClick={handleSearch}>
                <FiSearch size={15} />
              </SearchButton>
            </Form>
          </ContentHeader>

          <ComponentIsVisible when={!!user?.name}>
            <ContainerInfo>
              <UserImage src={user?.avatar_url} />
              <UserText>{user?.name}</UserText>
              <UserBio>{user?.bio}</UserBio>
              <ContainerStats>
                <ContentStats>
                  <NumberStats>{user?.public_repos}</NumberStats>
                  <TextStats>Repositórios</TextStats>
                </ContentStats>

                <ContentStats>
                  <NumberStats>{user?.followers}</NumberStats>
                  <TextStats>Seguidores</TextStats>
                </ContentStats>

                <ContentStats>
                  <NumberStats>{user?.following}</NumberStats>
                  <TextStats>Seguindo</TextStats>
                </ContentStats>
              </ContainerStats>
            </ContainerInfo>
          </ComponentIsVisible>

          <ComponentIsVisible when={!!error}>
            <EmptyThumbnail>
              <UserNotFundImage src={userNotFound} />
            </EmptyThumbnail>
            <EmptyMessage>Perfil não encontrado</EmptyMessage>
          </ComponentIsVisible>
        </Container>
      </ContainerApp>
    </GeneralContainer>
  )
}

export default Home
