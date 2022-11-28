import axios from 'axios'
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

type GitHubResponse = {
  name: string
  bio: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
}

function Home() {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [avatar, setAvatar] = useState('')
  const [follower, setFollower] = useState(0)
  const [following, setFollowing] = useState(0)
  const [repos, setRepos] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSearch = () => {
    axios
      .get<GitHubResponse>(`http://api.github.com/users/${search}`)
      .then((res) => {
        console.log('res', res.data)
        setName(res.data.name)
        setBio(res.data.bio)
        setAvatar(res.data.avatar_url)
        setFollower(res.data.followers)
        setFollowing(res.data.following)
        setRepos(res.data.public_repos)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleErrorMessage = () => {
    if (!errorMessage) {
      setErrorMessage(name)
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

          <ComponentIsVisible when={!!name}>
            <ContainerDetails>
              <Content>
                <ContentImage src={avatar} />
                <ContentText>{name}</ContentText>
                <ContentBio>{bio}</ContentBio>
                <ContainerHorizontal>
                  <ContentNumber>
                    <TextDetails>{repos}</TextDetails>
                    <NumberDetails>Repositórios</NumberDetails>
                  </ContentNumber>

                  <ContentNumber>
                    <TextDetails>{follower}</TextDetails>
                    <NumberDetails>Seguidores</NumberDetails>
                  </ContentNumber>

                  <ContentNumber>
                    <TextDetails>{following}</TextDetails>
                    <NumberDetails>Seguindo</NumberDetails>
                  </ContentNumber>
                </ContainerHorizontal>
              </Content>
            </ContainerDetails>
          </ComponentIsVisible>

          <ComponentIsVisible when={!handleErrorMessage}>
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
