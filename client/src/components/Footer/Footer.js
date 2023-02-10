import '../../styling/Footer.css'
import { useAuth0 } from "@auth0/auth0-react";
export default function Footer (){
 const { isAuthenticated } = useAuth0();

    return(
         isAuthenticated && (
        <footer></footer>
    )
    )
}