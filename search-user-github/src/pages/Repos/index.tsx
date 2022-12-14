/* eslint-disable no-undef */
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
import { repoActions } from '../../store/slices/repos'
import repoSelectors from '../../store/slices/repos/selectors'
import {
  ContainerBackButton,
  Content,
  ContentList,
  Header,
  Section,
  Title,
} from './styles'

const Repos = (): JSX.Element => {
  const reduxDispatch = useReduxDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const repos = useReduxSelector(repoSelectors.getAll)
  const isLoading = useReduxSelector(repoSelectors.getAllIsLoading)

  const handleGoBack = () => {
    navigate(pages.home)
  }

  const handleLoadRepos = useCallback(() => {
    reduxDispatch(
      repoActions.getAllRequest({
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
    handleLoadRepos()
  }, [handleLoadRepos])

  return (
    <Section>
      <Header>
        <ContainerBackButton onClick={handleGoBack}>
          <FiChevronsLeft size={26} />
        </ContainerBackButton>
        <Title>Repositórios</Title>
      </Header>

      <Content>
        <ComponentIsVisible when={!isLoading}>
          <ContentList>
            {repos.map((repo) => (
              <Card
                key={repo.id}
                username={repo.full_name}
                description={repo.description}
                image={repo.owner.avatar_url}
                route={repo.html_url}
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

export default Repos
