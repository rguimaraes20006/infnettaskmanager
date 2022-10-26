import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useUser from '../../Contexts/DataContext/useUser'
import * as S from './Style'

const Profile = () => {
  const navigate = useNavigate()
  const { name: userName, email: userEmail, authenticated, updateUser } = useUser()
  const [name, setName] = useState(userName || '')
  const [email, setEmail] = useState(userEmail || '')
  const handleUpdate = () => {
    if (!name || !email) return
    updateUser({ name, email, authenticated })
  }

  return (
    <S.Container>
      <S.Title>Perfil do usuário</S.Title>
      <S.Row>
        <S.Input
          disableUnderline={true}
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          placeholder="Nome"
        />
      </S.Row>
      <S.Row>
        <S.Input
          disableUnderline={true}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="E-mail"
        />
      </S.Row>
      <S.Row>
        <S.Button onClick={handleUpdate}>Salvar</S.Button>
        <S.Button onClick={() => navigate('/dashboard')}>Voltar</S.Button>
      </S.Row>
    </S.Container>
  )
}

export default Profile
