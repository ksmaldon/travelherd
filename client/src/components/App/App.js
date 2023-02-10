import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Dashboard from "../../pages/Dashboard"
import Signup from "../../pages/Signup";
import CreateTrip from '../../pages/CreateTrip'
import JoinTrip from "../../pages/JoinTrip";
import ViewTrips from "../../pages/ViewTrips";
import TripDetails from "../../pages/TripDetails";

//test 
function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Create" element={<CreateTrip />} />
        <Route path="/Join" element={<JoinTrip />} />
        <Route path="/View" element={<ViewTrips />} />
        <Route path="/Details" element={<TripDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
