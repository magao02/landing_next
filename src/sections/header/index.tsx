import Logo from "../../components/logo";
import nav_data from '../../sections/header/nav_data';
import {  Container } from "./styles";
import NavBar from "../../components/navbar";

export default function Header(){
    const teste= {path: 'z', label:'x'}
    return(
        <Container>
            <Logo></Logo>
            <NavBar menuItems={nav_data} ></NavBar>


        </Container>

    )
}
