import styled from "styled-components";
import { theme } from "../../styles/theme";
export const Service = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:100%;
margin-top: 50px;
`
export const Container  = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;
`
export const Title = styled.h1`
font-style: normal;
font-weight: 900;
font-size: 44px;
line-height: 48px;
text-align: center;
margin-top: 20px;
`
export const Form = styled.form`
    margin-top: 30px;

`
export const Input = styled.input`
width: 420px;
height: 65px;
font-size: 21px;
line-height: 25px;
padding-left: 20px;
margin-right: 30px;
`
export const Button = styled.button`
width:168px;
height:65px;
background-color: ${theme.colors.primary};
color: white;
margin-top: 30px;
font-weight: 800;
border: ${theme.colors.primary};
font-size: 21px;
line-height: 25px;
&:hover {
    cursor:pointer;
    background-color: ${theme.colors.primaryDark};
  }

`
