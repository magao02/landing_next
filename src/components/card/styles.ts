
import styled from "styled-components";
import Image from "next/image";
import { Link } from "react-scroll";
import { theme } from "../../styles/theme";
import Card from "../card";
export const Imageper =  styled(Image)`
background color: red;
&:hover {
    cursor:pointer;
  }
`
export const Container = styled.div`
width:320px;
margin-right: 40px;
`
export const Container_text = styled.div`
  background-color: white;
  padding-bottom: 35px;
`
export const Text = styled.p`

  font-size: 16px;
  Line-height: 26px;
  font-weight: 500;
`
export const Linkper =  styled(Link)`
line-height: 1.2;
margin-right:20px;
padding-right: 5px;
padding-left: 5px;
color:  ${theme.colors.primary};
&:hover {
    cursor:pointer;
    color:  ${theme.colors.primaryDark};

  }
`

