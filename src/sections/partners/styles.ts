import styled from "styled-components";
import Image from 'next/image'
import { theme } from "../../styles/theme";
export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`
export const ContainerImages = styled.div`
    margin-top: 30px;
    display: flex;
    width:70%;
    align-items: center;
    justify-content: space-between;


`
export const Imageper =  styled(Image)`

&:hover {
    cursor:pointer;
  }
`
export const ContainerBG = styled.div`
  background-color: ${theme.colors.primary};
  display:flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;

  width: 100%;
    height:300px;

`
export const Button = styled.button`
    width:168px;
    height:41px;
    background-color: white;
    color: ${theme.colors.primary};
    font-weight: 800;
    border: 3px solid white;

    &:hover {
        cursor:pointer;
        background-color: ${theme.colors.primaryDark};
      }
`
