// CSS
import "./About.css";

// Images
import myImage from "../../../../../Images/Sardorbek2007.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="aboutMe">
        <div className="column">
          <div className="myImage">
            <img src={myImage} alt="Sardorbek Olimov's image" />
          </div>
          <div className="myName">
            <h4>Sardorbek Olimov</h4>
          </div>
          <div className="frontendDev">
            <h2>Frontend Developer</h2>
          </div>
          <div className="myInfo">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
