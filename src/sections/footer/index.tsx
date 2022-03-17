import Logo from "../../components/logo";
import nav_data from '../../sections/header/nav_data';
import {  Container} from "./styles";
import NavBar from "../../components/navbar";
import NavFooter from "../../components/navfooter";

import nav_social from "./nav_social";
import nav_footer from "./nav_footer";

export default function Footer(){
    const teste= {path: 'z', label:'x'}
    return(
        <Container>
            <Logo></Logo>
            <NavFooter menuItems={nav_data} ></NavFooter>
            <NavFooter menuItems={nav_footer} ></NavFooter>
            <NavFooter menuItems={nav_social} ></NavFooter>

        </Container>

    )
}
