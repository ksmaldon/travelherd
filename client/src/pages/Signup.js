import '../styling/Signup.css'
import Arrow from '../assets/arrow.png'
import LoginButton from '../components/LoginButton/LoginButton';
export default function Signup(){
    return (
      <section id="signup">
        <div className="signup-text">
          <p>Feeling decision fatigue?</p>
          <img></img>
          <img id="arrow-img" src={Arrow}></img>
          <p className="motto">Group travel without the hassle!</p>
          <button>Sign Up</button>
          <p>Already have an account? Log In here!</p>
        </div>
        <div className="signup-image">
          <LoginButton />
        </div>
      </section>
    );
}