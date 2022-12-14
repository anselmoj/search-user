import { useCallback, useEffect } from 'react'
import { FiChevronsLeft } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import pages from '../../components/constants/pages'
import ComponentIsVisible from '../../components/utils/IsVisible'
import Loading from '../../components/utils/Loading'
import helpers from '../../helpers'
import { useReduxDispatch } from '../../hooks/useReduxDispatch'
import { useReduxSelector } from '../../hooks/useReduxSelector'
import { followerActions } from '../../store/slices/follower'
import followerSelectors from '../../store/slices/follower/selectors'
import {
  ContainerBackButton,
  Content,
  ContentList,
  Header,
  Section,
  Title,
} from './styles'

function Follower() {
  const reduxDispatch = useReduxDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const followers = useReduxSelector(followerSelectors.getAllFollower)
  const isLoading = useReduxSelector(followerSelectors.getAllIsLoading)

  const handleGoBack = () => {
    navigate(pages.home)
  }

  const handleLoadFollowers = useCallback(() => {
    reduxDispatch(
      followerActions.getAllFollowerRequest({
        data: {
          login: params.user as string,
        },
        functions: {
          error(err: any) {
            helpers.errorHandling(err)
          },
        },
      }),
    )
  }, [params.user, reduxDispatch])

  useEffect(() => {
    handleLoadFollowers()
  }, [handleLoadFollowers])

  return (
    <Section>
      <Header>
        <ContainerBackButton onClick={handleGoBack}>
          <FiChevronsLeft size={26} />
        </ContainerBackButton>
        <Title>Seguidores</Title>
      </Header>

      <Content>
        <ComponentIsVisible when={!isLoading}>
          <ContentList>
            {followers.map((follow) => (
              <Card
                key={follow.id}
                username={follow.login}
                image={follow.avatar_url}
                route={follow.html_url}
              />
            ))}
          </ContentList>
        </ComponentIsVisible>

        <ComponentIsVisible when={isLoading}>
          <Loading />
        </ComponentIsVisible>
      </Content>
    </Section>
  )
}

export default Follower
