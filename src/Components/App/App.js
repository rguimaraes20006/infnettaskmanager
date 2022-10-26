import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import useUI from '../../Contexts/DataContext/useUI'
import routes from '../../Routes'
import Splash from '../Splash'
import * as S from './Style'

const App = () => {
  const { showSplash, setShowSplash } = useUI()

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 2000)
  })

  return (
    <S.Paper>
      <Splash show={showSplash} />
      <Routes>
        {routes.map(({ Component: Layout, routes: layoutRoutes }, lIdx) => {
          return (
            <Route element={<Layout />} key={lIdx} replace>
              {layoutRoutes.map(({ path, Component }, rIdx) => (
                <Route
                  path={path}
                  element={
                    <Suspense>
                      <Component />
                    </Suspense>
                  }
                  key={rIdx}
                />
              ))}
            </Route>
          )
        })}
      </Routes>
    </S.Paper>
  )
}

export default App
