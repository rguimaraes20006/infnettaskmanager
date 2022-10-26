import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './Style'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const save = () => {
    if (!email || !name || !password || !confirmPassword || password !== confirmPassword) return
    // @todo: save
    navigate('/')
  }

  return (
    <S.Container>
      <S.Title>Cadastrar no APP</S.Title>
      <S.Form>
        <S.FormControl>
          <S.TextField
            id="email"
            label="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            error={!email}
            autoComplete="user-email"
          />
        </S.FormControl>
        <S.FormControl>
          <S.TextField
            id="name"
            label="Nome Completo"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            error={!name}
            autoComplete="user-name"
          />
        </S.FormControl>
        <S.FormControl>
          <S.TextField
            type="password"
            id="password"
            label="Senha"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            error={!password}
            autoComplete="user-password"
          />
        </S.FormControl>
        <S.FormControl>
          <S.TextField
            type="password"
            id="password-confirmation"
            label="Confirme a senha"
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            error={!confirmPassword || confirmPassword !== password}
            autoComplete="user-password-confirmation"
          />
        </S.FormControl>
        <S.FormControl>
          <S.Button type="button" variant="contained" onClick={save}>
            Cadastrar
          </S.Button>
        </S.FormControl>
      </S.Form>
    </S.Container>
  )
}

export default Register
