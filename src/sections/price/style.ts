import styled from "styled-components";
import Card from "../../components/card";

export const Container  = styled.section`
width: 100%;
background: url(/greenbg.png);
display: flex;
align-items: center;
justify-content: center;
height:100%;
margin-top: 50px;
`
export const CardBottom = styled(Card)`
  margin-top: 40px;
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    width:320px;
`
export const Title = styled.h1`
    font-weight: 900;
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 30px;

`
export const Text = styled.p`
    font-size: 17px;
    line-height: 23px;
`
