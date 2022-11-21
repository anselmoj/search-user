import './styles.css'
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
  ContainerContent,
} from './styles'
import ComponentIsVisible from '../components/utils/IsVisible'

type GitHubResponse = {
  name: string
  bio: string
  avatar_url: string
  followers: number
  following: number
}

function Home() {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [avatar, setAvatar] = useState('')
  const [follower, setFollower] = useState(0)
  const [following, setFollowing] = useState(0)

  const handleSearch = () => {
    axios
      .get<GitHubResponse>(`http://api.github.com/users/${search}`)
      .then((res) => {
        setName(res.data.name)
        setBio(res.data.bio)
        setAvatar(res.data.avatar_url)
        setFollower(res.data.followers)
        setFollowing(res.data.following)
      })
      .catch((err) => {
        console.log(err)
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

          <ComponentIsVisible when={!!name}>
            <ContainerContent>
              <Content>
                <ContentImage src={avatar} />
                <ContentText>{name}</ContentText>
                <ContentBio>{bio}</ContentBio>
                {/* <ContentFollowers>{follower}</ContentFollowers>
                <ContentFollowers>{following}</ContentFollowers> */}
              </Content>
            </ContainerContent>
          </ComponentIsVisible>
        </Container>
      </ContainerApp>
    </GeneralContainer>
  )
}

export default Home
