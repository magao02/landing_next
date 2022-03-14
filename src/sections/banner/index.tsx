import Logo from "../../components/logo";
import nav_data from '../../sections/header/nav_data';
import {  Banners, Box, Container, Imageper, Text, Title, Button, ButtonLight } from "./styles";
import NavBar from "../../components/navbar";


export default function Banner(){

    return(
        <Banners>
        <Container>
            <Box>
                <Title>Create Stunning<br />Email Campaigns</Title>
                <Text>Create and launch email campaigns that captivate<br />your customers in just a few clicks.</Text>
                <Button>TRY NOW</Button>
                <ButtonLight>GET IT</ButtonLight>
            </Box>
            <Imageper src=  '/hero photo.png' width="670px" height="381px"></Imageper>

        </Container>
        </Banners>


    )
}
