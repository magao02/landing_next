import styled, { css, WithThemeFnInterface } from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { Redirect } from 'next/dist/lib/load-custom-routes'
export const Imageper =  styled(Image)`
background color: red;
&:hover {
    cursor:pointer;
  }
`
