import { FiSearch, FiX } from 'react-icons/fi'
import { useCallback, useState } from 'react'
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
import { useNavigate } from 'react-router-dom'
import pages from '../../components/constants/pages'
import { IProfile } from '../../store/slices/home'
// import profileSelectors from '../../store/slices/home/selectors'

type GitHubResponse = {
  name: string
  bio: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
  full_name: string
  description: string
  login: string
}

function Home() {
  const [search, setSearch] = useState<string>('')
  const [user, setUser] = useState<IProfile | null>(null)
  const [error, setError] = useState<boolean>(false)
  const navigate = useNavigate()
  // const profile = useReduxSelector(profileSelectors.getAllList)

  const handleNavigateRepos = useCallback(
    (id: string) => {
      navigate(pages.repos(id))
    },
    [navigate],
  )

  const handleNavigateFollowers = useCallback(
    (id: string) => {
      navigate(pages.follower(id))
    },
    [navigate],
  )

  const handleNavigateFollowing = useCallback(
    (id: string) => {
      navigate(pages.following(id))
    },
    [navigate],
  )

  const handleSearchButton = () => {
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

  const handleClearButton = () => {
    setSearch('')
    setUser(null)
    setError(false)
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearchButton()
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
                placeholder="Digite um perfil"
                onKeyPress={handleKeyPress}
              />
              <ClearButton onClick={handleClearButton}>
                <FiX size={15} />
              </ClearButton>
              <SearchButton onClick={handleSearchButton}>
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
                <ContentStats
                  onClick={() => handleNavigateRepos(user?.login as string)}
                >
                  <NumberStats>{user?.public_repos}</NumberStats>
                  <TextStats>Repositórios</TextStats>
                </ContentStats>

                <ContentStats
                  onClick={() => handleNavigateFollowers(user?.login as string)}
                >
                  <NumberStats>{user?.followers}</NumberStats>
                  <TextStats>Seguidores</TextStats>
                </ContentStats>

                <ContentStats
                  onClick={() => handleNavigateFollowing(user?.login as string)}
                >
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
