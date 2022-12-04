import { Route, Routes } from 'react-router-dom'

import pages from '../components/constants/pages'
import Home from '../pages/Home'

// eslint-disable-next-line no-undef
const MainRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Home />} path={pages.home} />
    </Routes>
  )
}

export default MainRoutes
