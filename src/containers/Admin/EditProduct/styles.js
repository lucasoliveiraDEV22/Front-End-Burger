import styled from 'styled-components'
import {Button} from '../../../components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background-color: #565656;
    border-radius:10px;
    padding: 30px;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .reactSelectError {
  border: 1px solid red !important;
}
`

export const Label = styled.div`
  position: relative;
  top: 12px;
  color:#FFFFFF;
  font-size:14px;
  font-weight:400;
  `

export const Input = styled.input`
  min-width: 322px;
  box-shadow: 0px 4px 14px 0px #0000001A;
  border-radius:8px;
  padding-left:5px;
  border:none;
  height: 30px;
  border:${props=>props.error && '1px solid red'};
`

export const ButtonStyle=styled(Button)`
  width:100%;
  margin-top:30px;
`

export const LabelUpload=styled.label`
    display: flex;
    align-items: center;
    justify-content:center;
    gap:5px;
    color: #FFFFFF;
    margin-top: 19px;
    margin-bottom: 15px;
    border: ${props=>props.error ? '1px dashed red' : '1px dashed #ffffff'};
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;

    input{
      opacity:0;
      width:1px;
    }
`

export const InputContainer=styled.div`
    display:flex;
    gap:10px;

    input {
        width:18px;
        height:18px;
        cursor:pointer;
    }
`