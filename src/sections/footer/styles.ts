import styled, { css } from 'styled-components'
import NavBar from '../../components/navbar'
import { theme } from '../../styles/theme'

export const Container  =  styled.nav`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Button = styled.button`
    width:168px;
    height:41px;
    background-color: ${theme.colors.primary}
`
export const NavFooter = styled(NavBar)`
    flex-direction: column

`
