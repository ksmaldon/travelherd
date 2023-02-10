import { Link } from "react-router-dom";
import "../../styling/Nav.css";
import Logo from "./logo.png";
import LoginButton from "../../components/LoginButton/LoginButton";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

export default function Nav() {
  return (
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
  );
}
