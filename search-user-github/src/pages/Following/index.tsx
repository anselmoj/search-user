import { useCallback, useEffect } from 'react'
import { FiChevronsLeft } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card'
import pages from '../../components/constants/pages'
import ComponentEmpty from '../../components/utils/Empty'
import ComponentIsVisible from '../../components/utils/IsVisible'
import Loading from '../../components/utils/Loading'
import helpers from '../../helpers'
import { useReduxDispatch } from '../../hooks/useReduxDispatch'
import { useReduxSelector } from '../../hooks/useReduxSelector'
import { followingActions } from '../../store/slices/following'
import followingSelectors from '../../store/slices/following/selectors'
import followingNotFound from '../../assets/utils/not-data.svg'
import {
  ContainerBackButton,
  Content,
  ContentList,
  Header,
  Section,
  Title,
} from './styles'

function Following() {
  const reduxDispatch = useReduxDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const following = useReduxSelector(followingSelectors.getAllFollowing)
  const isLoading = useReduxSelector(followingSelectors.getAllIsLoading)

  const handleGoBack = () => {
    navigate(pages.home)
  }

  const handleLoadFollowing = useCallback(() => {
    reduxDispatch(
      followingActions.getAllFollowingRequest({
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
    handleLoadFollowing()
  }, [handleLoadFollowing])

  return (
    <Section>
      <Header>
        <ContainerBackButton onClick={handleGoBack}>
          <FiChevronsLeft size={26} />
        </ContainerBackButton>
        <Title>Seguindo</Title>
      </Header>

      <Content>
        <ComponentIsVisible when={!isLoading}>
          <ContentList>
            {following.map((follow) => (
              <Card
                key={follow.id}
                username={follow.login}
                image={follow.avatar_url}
                route={follow.html_url}
              />
            ))}
            <ComponentEmpty
              image={followingNotFound}
              message="Nenhum seguidor encontrado"
              show={!following.length}
            />
          </ContentList>
        </ComponentIsVisible>

        <ComponentIsVisible when={isLoading}>
          <Loading />
        </ComponentIsVisible>
      </Content>
    </Section>
  )
}

export default Following
