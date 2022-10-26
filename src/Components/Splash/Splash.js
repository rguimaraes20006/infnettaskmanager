import React from 'react'
import useUI from '../../Contexts/DataContext/useUI'
import * as S from './Style'

const Splash = () => {
  const { showSplash } = useUI()

  return (
    <S.Overlay open={showSplash}>
      <S.Logo />
      Aguarde...
    </S.Overlay>
  )
}

export default Splash
