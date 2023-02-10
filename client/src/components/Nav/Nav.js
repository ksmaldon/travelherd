import { Link } from "react-router-dom";
import "../../styling/Nav.css";
import Logo from "./logo.png";
import LoginButton from "../../components/LoginButton/LoginButton";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <nav>
      <div id="logo">
        <img src={Logo} alt=""></img>
      </div>
      <ul>
        <li>
          <Link to="/Dashboard">Home</Link>
        </li>
        <li>
          <li>
            <Link to="/Dashboard">Home</Link>
          </li>
          <LoginButton />
          <LogoutButton />
        </li>
      </ul>
    </nav>
    )


  );
}
