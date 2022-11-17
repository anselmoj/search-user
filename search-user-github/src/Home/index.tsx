import './styles.css'
import axios from 'axios'
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
  FormText,
  GeneralContainer,
  Header,
  Main,
  MainInput,
  TextHeader,
} from './styles'

type GitHubResponse = {
  name: string
  bio: string
  avatar_url: string
}

function Home() {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('Aguardando...')
  const [bio, setBio] = useState('Aguardando...')
  const [avatar, setAvatar] = useState('Aguardando...')

  const handleSearch = () => {
    axios
      .get<GitHubResponse>(`http://api.github.com/users/${search}`)
      .then((res) => {
        console.log('res', res)
        setName(res.data.name)
        setBio(res.data.bio)
        setAvatar(res.data.avatar_url)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <GeneralContainer>
      <ContainerApp>
        <Container>
          <Header>
            <TextHeader>Develop search</TextHeader>
          </Header>

          <Main>
            <Form>
              <FormText>Buscador de perfis do GITHUB</FormText>
              <MainInput
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Digite um usuário"
              />
              <ButtonSearch onClick={handleSearch}>Buscar</ButtonSearch>
            </Form>

            <Content>
              <ContentImage src={avatar} alt="Foto Perfil" />
              <ContentText>{name}</ContentText>
              <ContentBio>{bio}</ContentBio>
            </Content>
          </Main>
        </Container>
      </ContainerApp>
    </GeneralContainer>
  )
}

export default Home
