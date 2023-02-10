import '../styling/Dashboard.css'
import { Link } from 'react-router-dom';


export default function Dashboard() {

  return (
    <section id="dashboard">
      <h2>Ready to start?</h2>
      <div id="dashboard-links">
        <div className="link-container">
          <Link to="/Create">
            <div className="link-image create"></div>
          </Link>
          <h3>Create Trip</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="link-container">
          <Link to="/Join">
            <div className="link-image join"></div>
          </Link>
          <h3>Join Trip</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="link-container">
          <Link to="/View">
            <div className="link-image view"></div>
          </Link>
          <h3>View Trips</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
