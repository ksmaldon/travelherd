import "../styling/CreateTrip.css";
import { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getPassword } from "../utils/getPassword";
import { v4 as uuidv4 } from 'uuid';

export default function CreateTrip() {
  const { user } = useAuth0()
  const password = getPassword()
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const tripNameRef = useRef();
  const destinationRef = useRef();

  const url = "http://localhost:3001"

async function newTrip(e){
   e.preventDefault();

const tripObj = {
  trip_name:tripNameRef.current.value === '' ?  null:tripNameRef.current.value,
  admin_id: user?.sub,
  cover_photo: "https://i.lensdump.com/i/TZcNEr.webp",
  total_members: 1,
  trip_join_id: uuidv4(),
  trip_join_password: password
};
//New trip posted to db
const response = await fetch(`${url}/create`,{
  method:"POST",
  headers: { "content-Type":"application/json" },
  body: JSON.stringify(tripObj)

})
const tripData = await response.json()
const tripID = tripData.payload[0].trip_id;
console.log(tripID)

//New member posted to db
const membersObj = {
  trip_id: tripID,
  member_id: user?.sub,
  first_name:firstNameRef.current.value === "" ? null : firstNameRef.current.value,
  last_name:lastNameRef.current.value === "" ? null : lastNameRef.current.value,
  password:password
};
 await fetch(`${url}/join`, {
   method: "POST",
   headers: { "content-Type": "application/json" },
   body: JSON.stringify(membersObj),
 });
}

  return (
    <section className="trip-pages">
      <div className="form-progress"></div>
      <div className="form-container">
        <h2>CREATE TRIP</h2>
        <p>Add your trip details below.</p>
        <form>
          <label>
            First Name
            <input ref={firstNameRef}></input>
          </label>
          <label>
            Last Name
            <input ref={lastNameRef}></input>
          </label>
          <label>
            Trip Name
            <input ref={tripNameRef}></input>
          </label>
          <label>
            Destination
            <input ref={destinationRef}></input>
          </label>
          <p>Select a cover image</p>
          <div id="cover-image-container">
            <img src="https://i.lensdump.com/i/TZcNEr.webp" alt=""></img>

            <img src="https://i.lensdump.com/i/TZcNEr.webp" alt=""></img>

            <img src="https://i.lensdump.com/i/TZcNEr.webp" alt=""></img>

            <img src="https://i.lensdump.com/i/TZcNEr.webp" alt=""></img>

            <img src="https://i.lensdump.com/i/TZcNEr.webp" alt=""></img>

            <img src="https://i.lensdump.com/i/TZcNEr.webp" alt=""></img>
          </div>

          <button onClick={newTrip}>Submit</button>
        </form>
      </div>
    </section>
  );
}
