import Logo from "../../components/logo";
import nav_data from '../../sections/header/nav_data';
import {  Title, Features, Container, Imageper, ButtonLight} from "./styles";
import NavBar from "../../components/navbar";




export default function Feature(){

    return(
        <Features>
            <Container>
                <Imageper src= '/VIDEO (image).png' width="670px" height="381px"></Imageper>
                <Title>Reach More Customers</Title>
                <ButtonLight>LERAN HOW</ButtonLight>
            </Container>
        </Features>


    )
}
