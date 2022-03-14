import Link from 'next/link'
import Image from "next/image";
import { Imageper } from './styles';

export default function Logo(){
    return(

        <Link href='/'>
           <Imageper src=  '/NinjaMail Logo.png' width="270px" height="81px" ></Imageper>
        </Link>
    )
}
