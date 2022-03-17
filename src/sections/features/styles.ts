import styled, { css } from 'styled-components'
import Image from 'next/image'
import { theme } from '../../styles/theme'
export const Container  =  styled.div`
    width:944px;
    height:531px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    background: url(/VIDEO.png);

`
export const Features = styled.section`
    margin-top: 3%;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center

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
    height:80px;

    color:white;

`
export const ButtonLight = styled.button`
    width:168px;
    height:65px;
    background-color: white;
    color: ${theme.colors.primary} ;


    z-index:3;
    font-weight: 800;
    border: 2px solid ${theme.colors.primary};

    &:hover {
        cursor:pointer;

      }
`
