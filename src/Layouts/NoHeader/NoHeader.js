import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import * as S from './Style'

const NoHeader = () => {
  const navigate = useNavigate()

  return (
    <S.Box>
      <S.Logo onClick={() => navigate('/')} />
      <Outlet />
    </S.Box>
  )
}

export default NoHeader
