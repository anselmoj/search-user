import { Route, Routes } from 'react-router-dom'

import pages from '../components/constants/pages'
import Follower from '../pages/Followers'
import Following from '../pages/Following'
import Home from '../pages/Home'
import Repos from '../pages/Repos'

// eslint-disable-next-line no-undef
const MainRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Home />} path={pages.home} />
      <Route element={<Repos />} path="repositorios/:user" />
      <Route element={<Follower />} path="seguidores/:user" />
      <Route element={<Following />} path="seguindo/:user" />
    </Routes>
  )
}

export default MainRoutes
