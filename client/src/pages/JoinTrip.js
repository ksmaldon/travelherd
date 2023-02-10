import "../styling/JoinTrip.css";
import { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function JoinTrip() {
  const { user } = useAuth0();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const tripID = useRef();
  const passwordRef = useRef();

  const url = "http://localhost:3001";

  async function addMember(e) {
    e.preventDefault();
    //get actual tripID
    const response = await fetch(`${url}/join/${tripID.current.value}`);
    const data = await response.json();
    const id = data.payload[0].trip_id;
    console.log(id);

    //New member posted to db
    const membersObj = {
      trip_id: id,
      member_id: user?.sub,
      first_name:firstNameRef.current.value === "" ? null : firstNameRef.current.value,
      last_name:lastNameRef.current.value === "" ? null : lastNameRef.current.value,
      password:passwordRef.current.value === "" ? null : passwordRef.current.value,
    };
    await fetch(`${url}/join`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(membersObj),
    });
  }

  return (
    <section className="trip-pages">
      <div className="form-img"></div>
      <div className="form-container">
        <h2>JOIN TRIP</h2>
        <p>Received an invite? Fill in the details below to join.</p>
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
            Trip ID
            <input ref={tripID}></input>
          </label>
          <label>
            Password
            <input ref={passwordRef}></input>
          </label>
          <button onClick={addMember}>Submit</button>
        </form>
      </div>
    </section>
  );
}
