import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import {
  ButtonSearch,
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
    setError(false)
    httpClient
      .get<GitHubResponse>(`${search}`)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        setError(true)
        return err
      })
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
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Digite um usuário"
              />
              <ButtonSearch onClick={handleSearch}>
                <FiSearch size={15} />
              </ButtonSearch>
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
              </Content>
            </ContainerDetails>
          </ComponentIsVisible>

          <ComponentIsVisible when={!!error}>
            <ContainerHorizontal>
              <ContentText>Usuário nao encontrado</ContentText>
            </ContainerHorizontal>
          </ComponentIsVisible>
        </Container>
      </ContainerApp>
    </GeneralContainer>
  )
}

export default Home
