import { Container, Container_text, Imageper, Linkper, Text} from "./styles";

export default function Card( ){
    return(
        <Container >
            <Imageper src={'/photo (1).png'} width="320px" height="250px" ></Imageper>
            <Container_text>
                <Text>Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.</Text>
                <Linkper
                to={'/'}
                spy={true}
                smooth={true}
                offset={-70}

                >Learn more '' </Linkper>
            </Container_text>
        </Container>


        )}
