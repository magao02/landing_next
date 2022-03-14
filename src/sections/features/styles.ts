import styled, { css } from 'styled-components'
import Image from 'next/image'
import { theme } from '../../styles/theme'
export const Container  =  styled.div`
    width:100%;
    display: flex;
    align-items: center;

    justify-content: center;
`
export const Features = styled.section`
    margin-top: 3%;
    width:100%;
    height:100%;
    background-image: url();
`
export const Imageper =  styled(Image)`
background color: red;
z-inder:1;
&:hover {
    cursor:pointer;
  }
`
export const Title = styled.h1`
    font-weight: 900;
    font-size: 39px;
    line-height: 45px;
    z-index:2;
    color:white;
    margin-left:-42%;
`
export const ButtonLight = styled.button`
    width:168px;
    height:65px;
    background-color: white;
    color: ${theme.colors.primary} ;
    margin-top: 200px;
    margin-left: -25%;
    z-index:3;
    font-weight: 800;
    border: 2px solid ${theme.colors.primary};

    &:hover {
        cursor:pointer;

      }
`
