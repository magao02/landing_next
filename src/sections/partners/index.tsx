import { Button, Container, ContainerBG, ContainerImages, Imageper, Title } from "./styles";

export default function Partners(){

    return(
        <Container id='partners'>
            <h1>All the best brands <br /> already use us.</h1>
            <ContainerImages>
            <Imageper src= '/Logo1.png' width="160px" height="33px" />
            <Imageper src= '/Logo2.png' width="60px" height="43px" />
            <Imageper src= '/Logo3.png' width="160px" height="33px" />
            <Imageper src= '/Logo5.png' width="160px" height="33px" />
            <Imageper src= '/Logo5.png' width="160px" height="33px" />
            </ContainerImages>
            <ContainerBG>
                <Title>Get started today!</Title>
                <Button>try now</Button>
            </ContainerBG>
        </Container>



    )
}
