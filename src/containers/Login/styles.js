import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 80%;
`

export const ContainerItems = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80%;
  padding: 25px 75px;

  img {
    width: 360px;
    height: 94px;
  }

  h1 {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 4.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 16px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.416px;
  height: 38.319px;
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  a {
    text-decoration-line: underline;
    cursor: pointer;
  }
`

export const ErrorMessage = styled.p`
  color: #cc1717;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2px;
`
