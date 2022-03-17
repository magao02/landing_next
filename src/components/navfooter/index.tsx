
import {  Linkper, Nav } from './styles';
type NavFooterProps = {
    menuItems: [
        {
            path: string,
            label: string
        }
    ]
    }
export default function NavFooter({menuItems}: NavFooterProps){
    return(
        <Nav>
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

        </Nav>

    )}
