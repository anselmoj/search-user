/* eslint-disable no-undef */
import { useCallback, useRef } from 'react'
import {
  Container,
  ContainerApp,
  UserBio,
  UserImage,
  UserText,
  GeneralContainer,
  ContentHeader,
  TextHeader,
  TitleHeader,
  ContainerInfo,
  ContainerStats,
  ContentStats,
  NumberStats,
  TextStats,
} from './styles'
import ComponentIsVisible from '../../components/utils/IsVisible'
import { useNavigate } from 'react-router-dom'
import pages from '../../components/constants/pages'
import { profileActions } from '../../store/slices/home'
import { useDispatch } from 'react-redux'
import helpers from '../../helpers'
import profileSelectors from '../../store/slices/home/selectors'
import { useReduxSelector } from '../../hooks/useReduxSelector'
import ProfileFilter, { IProfileFilterData } from './Filter'
import { FormikProps } from 'formik'
import Loading from '../../components/utils/Loading'
import ComponentEmpty from '../../components/utils/Empty'
import imageNotFound from '../../assets/utils/not-found-cat.svg'
import { Helmet } from 'react-helmet'

const Home = (): JSX.Element => {
  const reduxDispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useReduxSelector(profileSelectors.getUserValues)
  const isLoading = useReduxSelector(profileSelectors.getUserIsLoading)
  const isError = useReduxSelector(profileSelectors.getUserIsError)
  const profileFilterRef = useRef<FormikProps<IProfileFilterData>>(null)

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

  const handleFilter = useCallback(
    (data: IProfileFilterData) => {
      reduxDispatch(
        profileActions.getUserRequest({
          data: {
            search: data.search,
          },
          functions: {
            error(err: any) {
              helpers.errorHandling(err)
            },
          },
        }),
      )
    },
    [reduxDispatch],
  )

  const handleClearFilter = useCallback(() => {
    profileFilterRef.current?.resetForm()
    reduxDispatch(
      profileActions.getUserRequest({
        data: {
          search: '',
        },
        functions: {
          error(err: any) {
            helpers.errorHandling(err)
          },
        },
      }),
    )
  }, [reduxDispatch])

  return (
    <GeneralContainer>
      <ContainerApp>
        <Container>
          <Helmet title="GitHub Search" />
          <TitleHeader>
            <TextHeader>GitHub Profile</TextHeader>
          </TitleHeader>
          <ContentHeader>
            <ProfileFilter
              onClear={handleClearFilter}
              onSubmit={handleFilter}
              ref={profileFilterRef}
            />
          </ContentHeader>
          <ComponentIsVisible when={!isLoading}>
            <ComponentIsVisible when={!!profile?.name && !isError}>
              <ContainerInfo>
                <UserImage src={profile?.avatar_url} />
                <UserText>{profile?.name}</UserText>
                <UserBio>{profile?.bio}</UserBio>
                <ContainerStats>
                  <ContentStats
                    onClick={() =>
                      handleNavigateRepos(profile?.login as string)
                    }
                  >
                    <NumberStats>{profile?.public_repos}</NumberStats>
                    <TextStats>Repositórios</TextStats>
                  </ContentStats>

                  <ContentStats
                    onClick={() =>
                      handleNavigateFollowers(profile?.login as string)
                    }
                  >
                    <NumberStats>{profile?.followers}</NumberStats>
                    <TextStats>Seguidores</TextStats>
                  </ContentStats>

                  <ContentStats
                    onClick={() =>
                      handleNavigateFollowing(profile?.login as string)
                    }
                  >
                    <NumberStats>{profile?.following}</NumberStats>
                    <TextStats>Seguindo</TextStats>
                  </ContentStats>
                </ContainerStats>
              </ContainerInfo>
            </ComponentIsVisible>

            <ComponentEmpty
              image={imageNotFound}
              message="Perfil não encontrado"
              show={!profile?.name && !isError}
            />
          </ComponentIsVisible>

          <ComponentIsVisible when={isLoading}>
            <Loading />
          </ComponentIsVisible>
        </Container>
      </ContainerApp>
    </GeneralContainer>
  )
}

export default Home
