import "./about.css";
import dev from "../../img/dev.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={dev} alt="" className="a-img" />
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My name Tinashe Jena I am a self-motivated, reliable, hardworking and honest individual, who is passionate about Technology and solving problems.
		  
        </p>
        <p className="a-desc">
         
        </p>
        
      </div>
    </div>
  );
};

export default About;
