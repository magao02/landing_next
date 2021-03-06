import { Link } from 'react-scroll'
import Image from "next/image";

import { Button, Linkper } from './styles';
type NavBarProps = {
    menuItems: [
        {
            path: string,
            label: string
        }
    ]
    }
export default function NavBar({menuItems}: NavBarProps){
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
