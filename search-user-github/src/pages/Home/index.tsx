import { FiSearch, FiX } from 'react-icons/fi'
import { useState } from 'react'
import {
  SearchButton,
  Container,
  ContainerApp,
  Content,
  ContentBio,
  ContentImage,
  ContentText,
  Form,
  GeneralContainer,
  ContentHeader,
  MainInput,
  TextHeader,
  TitleHeader,
  ContainerDetails,
  ContentNumber,
  ContainerHorizontal,
  TextDetails,
  NumberDetails,
  ClearButton,
} from './styles'
import ComponentIsVisible from '../../components/utils/IsVisible'
import httpClient from '../../services/httpClient'

interface IUserProps {
  name: string
  bio: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
  repos_url: string
}

type GitHubResponse = {
  name: string
  bio: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
  repos_url: string
}

function Home() {
  const [search, setSearch] = useState<string>('')
  const [user, setUser] = useState<IUserProps | null>(null)
  const [error, setError] = useState<boolean>(false)

  const handleSearch = () => {
    httpClient
      .get<GitHubResponse>(`${search}`)
      .then((res) => {
        if (!res.data.name) {
          setError(true)
        } else {
          setUser(res.data)
          handleRepos(res.data.repos_url)
        }
      })
      .catch((err) => {
        setError(true)
        return err
      })
  }

  const handleRepos = (urlRepos: string) => {
    httpClient
      .get<GitHubResponse>(`${urlRepos}`)
      .then((res) => {
        console.log('res', res)
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

  return (
    <GeneralContainer>
      <ContainerApp>
        <Container>
          <TitleHeader>
            <TextHeader>GitHub Profile</TextHeader>
          </TitleHeader>
          <ContentHeader>
            <Form>
              <MainInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Digite um usuário"
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
            <ContainerDetails>
              <Content>
                <ContentImage src={user?.avatar_url} />
                <ContentText>{user?.name}</ContentText>
                <ContentBio>{user?.bio}</ContentBio>
                <ContainerHorizontal>
                  <ContentNumber>
                    <TextDetails>{user?.public_repos}</TextDetails>
                    <NumberDetails>Repositórios</NumberDetails>
                  </ContentNumber>

                  <ContentNumber>
                    <TextDetails>{user?.followers}</TextDetails>
                    <NumberDetails>Seguidores</NumberDetails>
                  </ContentNumber>

                  <ContentNumber>
                    <TextDetails>{user?.following}</TextDetails>
                    <NumberDetails>Seguindo</NumberDetails>
                  </ContentNumber>
                </ContainerHorizontal>

                <ContainerHorizontal>
                  <ContentNumber>
                    <TextDetails>{user?.public_repos}</TextDetails>
                    <NumberDetails>Repositórios</NumberDetails>
                  </ContentNumber>

                  <ContentNumber>
                    <TextDetails>{user?.followers}</TextDetails>
                    <NumberDetails>Seguidores</NumberDetails>
                  </ContentNumber>

                  <ContentNumber>
                    <TextDetails>{user?.following}</TextDetails>
                    <NumberDetails>Seguindo</NumberDetails>
                  </ContentNumber>
                </ContainerHorizontal>
              </Content>
            </ContainerDetails>
          </ComponentIsVisible>

          <ComponentIsVisible when={!!error}>
            <ContainerHorizontal>
              <ContentText>Perfil não encontrado</ContentText>
            </ContainerHorizontal>
          </ComponentIsVisible>
        </Container>
      </ContainerApp>
    </GeneralContainer>
  )
}

export default Home
