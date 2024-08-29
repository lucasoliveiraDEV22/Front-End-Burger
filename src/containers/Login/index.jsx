import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import LoginImg from '../../assets/burger.svg'
import Logo from '../../assets/login.svg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import apiCodeBurger from '../../services/api'
import {
  Container,
  ContainerItems,
  ErrorMessage,
  Input,
  Label,
  LoginImage,
  SignInLink
} from './styles'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { data } = await apiCodeBurger.post('sessions', {
        email: clientData.email,
        password: clientData.password
      })

      // Armazena o token no localStorage
      localStorage.setItem('codeburger:userData', JSON.stringify(data))

      await toast.success('Seja bem-vindo(a)')

      putUserData(data)

      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      toast.error('Verifique seu e-mail e/ou sua senha')
    }
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 30, marginBottom: 10 }}>
            Sign In
          </Button>
        </form>
        <SignInLink>
          {' '}
          Não possui conta?{' '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Sign up
          </Link>{' '}
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}
