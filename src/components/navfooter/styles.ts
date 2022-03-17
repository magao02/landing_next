import styled, { css, WithThemeFnInterface } from 'styled-components'
import {Link} from 'react-scroll'
import { theme } from '../../styles/theme'
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`
export const Linkper =  styled(Link)`


font-size: 19px;
font-weight:700;
line-height: 22px;
margin-right:20px;
padding-right: 5px;
padding-left: 5px;
margin-bottom:20px;
&:hover {
    cursor:pointer;
    border-bottom: 5px solid ${theme.colors.primaryDark};

  }
`

