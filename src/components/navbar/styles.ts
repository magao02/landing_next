import styled, { css, WithThemeFnInterface } from 'styled-components'
import {Link} from 'react-scroll'
import Image from 'next/image'
import { Redirect } from 'next/dist/lib/load-custom-routes'
import { theme } from '../../styles/theme'
export const Linkper =  styled(Link)`
line-height: 1.2;
margin-right:20px;
padding-right: 5px;
padding-left: 5px;
border-bottom: 5px solid ${theme.colors.primary};
&:hover {
    cursor:pointer;
    border-bottom: 5px solid ${theme.colors.primaryDark};

  }
`
export const Button = styled.button`
    width:168px;
    height:41px;
    background-color: ${theme.colors.primary};
    color: white;
    font-weight: 800;
    border: ${theme.colors.primary};

    &:hover {
        cursor:pointer;
        background-color: ${theme.colors.primaryDark};
      }
`
