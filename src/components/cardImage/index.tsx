import { Title } from "../../sections/banner/styles";
import { Container, Name, Text } from "./styles";

type CardImageProps = {
    image: string;
    name: string;
    year: string
    }

export default function CardImages({image, name, year}: CardImageProps){

    return(
        <Container color={image} >
            <Name>{name}</Name>
            <Text>SInce march {year}</Text>
        </Container>


    )
}
