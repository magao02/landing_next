import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

import Image from 'next/image'
export const Container  =  styled.nav`
    width:100%;
    display: flex;
    align-items: center;

    justify-content: center;
`
export const Banners = styled.section`
    margin-top: 3%;
    width:100%;
    height:100%;
    background-image: url();
`
export const Box = styled.div`
    margin-top: -9%;
    margin-right: -5%;
    z-index:3

`
export const Title = styled.h1`
    font-weight: 900;
    font-size: 59px;
    line-height: 71px;
`
export const Text = styled.p`
font-weight: 500;
font-size: 19px;
line-height: 26px;
`
export const Imageper =  styled(Image)`
background color: red;
z-inder:1;
&:hover {
    cursor:pointer;
  }
`
export const Button = styled.button`
    width:168px;
    height:65px;
    background-color: ${theme.colors.primary};
    color: white;
    margin-top: 30px;
    font-weight: 800;
    border: ${theme.colors.primary};

    &:hover {
        cursor:pointer;
        background-color: ${theme.colors.primaryDark};
      }
`
export const ButtonLight = styled.button`
    width:168px;
    height:65px;
    background-color: white;
    color: ${theme.colors.primary} ;
    margin-top: 30px;
    margin-left: 25%;
    font-weight: 800;
    border: 2px solid ${theme.colors.primary};

    &:hover {
        cursor:pointer;

      }
`


