import { Container, Container_text, Imageper, Linkper, Text} from "./styles";
type CardProps = {
    image: string;
    text: string;
    }
export default function Card({ image, text }: CardProps){
    return(
        <Container >
            <Imageper src={image} width="320px" height="250px" ></Imageper>
            <Container_text>
                <Text>{text}</Text>
                <Linkper
                to={'/'}
                spy={true}
                smooth={true}
                offset={-70}

                >Learn more '' </Linkper>
            </Container_text>
        </Container>


        )}
