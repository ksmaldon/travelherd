import "../styling/ViewTrip.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function ViewTrips() {
const [trips, setTrips] = useState([]);
const { user } = useAuth0();
const url = "http://localhost:3001";

useEffect(()=>{
  async function getTrips() {
    const data = await fetch(`${url}/view/${user?.sub}`);
    const response = await data.json();
    setTrips(response.payload);
    
  }
  getTrips()

},[user?.sub])



  const location = useLocation();
console.log(location);
  console.log(trips?trips:null)


  return (
    <section id="view-trips">
      <h2>ViewTrips</h2>
      <div id="trip-gallery">
        {trips.map((trip) => {
          return (
            <Link
              style={{ backgroundImage: `url(${trip.cover_photo})` }}
              to="/Details"
            >
              <div className="trip-cover-img">
                <h3>{trip.trip_name}</h3>
              </div>
              
            </Link>
            
          );
        })}
      </div>
    </section>
  );
}
