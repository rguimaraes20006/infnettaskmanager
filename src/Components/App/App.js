import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import useUI from '../../Contexts/DataContext/useUI'
import routes from '../../Routes'
import Splash from '../Splash'
import * as S from './Style'

import {  initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'



  const firebaseConfig = {
    apiKey: "AIzaSyBNmCthCYb4AI3X46-TEJcbH0R7zf_7WO8",
    authDomain: "infnettaskmanager.firebaseapp.com",
    projectId: "infnettaskmanager",
    storageBucket: "infnettaskmanager.appspot.com",
    messagingSenderId: "685714588033",
    appId: "1:685714588033:web:91b66d167ee4290a236880",
    measurementId: "G-XNZ1NWS1KJ"
  };


const App = () => {
  const analytics = () => {
    console.log('chamou analytics');
    const app= initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  };
  const { showSplash, setShowSplash } = useUI()

  useEffect(() => {
    analytics()
    setTimeout(() => setShowSplash(false), 2000)
  }, [analytics])





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
