import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import useUI from '../../Contexts/DataContext/useUI'
import * as S from './Style'

const Menu = () => {
  const navigate = useNavigate()
  const { showMenu, setShowMenu } = useUI()
  const handleClose = (ev) => {
    if (ev.type === 'keydown' && ev.key !== 'Escape') return
    setShowMenu(false)
  }
  const go = (page) => {
    setShowMenu(false)
    navigate(page)
  }

  return (
    <Fragment key="left">
      <S.Drawer anchor="left" open={showMenu} onClose={handleClose} onKeyDown={handleClose}>
        <S.Title>
          Menu
          <S.Close onClick={handleClose} />
        </S.Title>
        <S.Option onClick={() => go('/dashboard')}>Dashboard</S.Option>
        <S.Option onClick={() => go('/adicionar-tarefa')}>Adicionar Tarefa</S.Option>
        <S.Option onClick={() => go('/perfil')}>Perfil</S.Option>
      </S.Drawer>
    </Fragment>
  )
}

export default Menu
