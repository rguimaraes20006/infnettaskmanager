import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../Components/Menu'
import useUI from '../../Contexts/DataContext/useUI'
import * as S from './Style'

const Main = () => {
  const { setShowMenu } = useUI()

  return (
    <S.Box>
      <Menu />
      <S.AppBar>
        <S.Menu>
          <S.IconMenu onClick={() => setShowMenu(true)} />
        </S.Menu>
        <S.Logo />
      </S.AppBar>
      <Outlet />
    </S.Box>
  )
}

export default Main
