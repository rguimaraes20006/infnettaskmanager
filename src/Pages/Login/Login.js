import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useTasks from '../../Contexts/DataContext/useTasks'
import useUser from '../../Contexts/DataContext/useUser'
import * as S from './Style'

const Login = () => {
  const navigate = useNavigate()
  const { updateUser, resetUser } = useUser()
  const { resetTasks } = useTasks()
  const [email, setEmail] = useState('rodrigo@infnet.com.br')
  const [password, setPassword] = useState('xoxota')
  const handleLogin = async () => {
    try {
      if (!email || !password) return
      updateUser({ email, authenticated: true })
      navigate('/dashboard')
    } catch (err) {
      console.debug(err)
    }
  }

  useEffect(() => {
    resetUser()
    resetTasks()
  }, [])

  return (
    <S.Container>
      <S.Title>Login no sistema</S.Title>
      <S.Form>
        <S.FormControl>
          <S.TextField
            type="text"
            id="email"
            label="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            autoComplete="user-email"
          />
        </S.FormControl>
        <S.FormControl>
          <S.TextField
            type="password"
            id="password"
            label="Senha"
            values={password}
            onChange={(ev) => setPassword(ev.target.value)}
            autoComplete="user-password"
          />
        </S.FormControl>
        <S.FormControl>
          <S.Button type="button" variant="contained" onClick={handleLogin}>
            Entrar
          </S.Button>
        </S.FormControl>
      </S.Form>
      <S.SocialMediaLabel>- Ou utilize sua rede social -</S.SocialMediaLabel>
      <S.SocialMediaLogin>
        <S.SocialMediaButton bg="Instagram" />
        <S.SocialMediaButton bg="LinkedIn" />
        <S.SocialMediaButton bg="Twitter" />
      </S.SocialMediaLogin>
      <S.RegisterLabel>
        Não tem uma conta?&nbsp;
        <S.RegisterButton onClick={() => navigate('/cadastro')}>Crie aqui</S.RegisterButton>
      </S.RegisterLabel>
    </S.Container>
  )
}

export default Login
