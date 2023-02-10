import '.././styling/TripDetails.css'
import Dropdown from '../components/Dropdown/Dropdown';

export default function TripDetails() {
  return (
    <section id="trip-details">
      <ul id="trip-details-menu" className="border">
        <img src="https://i.lensdump.com/i/TZcNEr.webp" alt=''></img>

        <p>Destination: Ibiza</p>
        <p>Date: Undecided</p>
        <p>Budget: Undecided</p>
        <p>Accomodation: Undecided</p>
      </ul>
      <div id="itinery" className="border">
        <h3>Start Vote</h3>
        <form>
          <label>
            Choose the category:<select></select>
          </label>
        </form>
      </div>
      <div className="border">
        <Dropdown/>

      </div>
      <div id="members" className="border">
        <h3>Members</h3>
        <p>Kylie Smaldon</p>
        <p>Amina Edmunds</p>
        <p>Iona Rose</p>
      </div>
      <div id="results" className="border">
        <h3>Voting History</h3>
        <div className="border">
          <img alt='' ></img>
          <p>Food</p>
          <p>Bob's Burgers</p>
          <date>21/03/2023</date>
        </div>
        <div className="border">
          <img alt=''></img>
          <p>Excursion</p>
          <p>Museum</p>
          <time>23/03/2023</time>
        </div>
      </div>
    </section>
  );
}
