import Logo from "../../components/logo";
import nav_data from '../../sections/header/nav_data';
import {  Container } from "./styles";
import NavBar from "../../components/navbar";

export default function Header(){

    return(
        <Container>
            <Logo></Logo>
            <NavBar ></NavBar>

        </Container>

    )
}
