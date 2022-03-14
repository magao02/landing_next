import { Link } from 'react-scroll'
import Image from "next/image";
import menuItems from '../../sections/header/nav_data'
import { Button, Linkper } from './styles';
export default function NavBar(){
    return(
        <nav>
            {menuItems.map((menuItem,i)=>(
              <Linkper
              to={menuItem.path}
                spy={true}
                smooth={true}
                offset={-70}
                key={i}
              >
                {menuItem.label}
              </Linkper>
              ))}
              <Button>
              SIGN UP FREE
              </Button>
        </nav>

    )}
