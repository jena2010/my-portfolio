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
		  I recently completed my BSc Computer Science Degree at University of the Western Cape 
        </p>
        <p className="a-desc">
          I would like to join SovTech as a developer to kick start my career and contribute to the growth of the company.
		  SovTech is a leading company in custom software dvelopment in South Africa ,with mutiple awards ,so it will be a great honor for me 
		  to be part of such a company .I am someone who believes technology can solve any problems and that what motivated me to persue a career 
		  in software development so that i can contribute to solving problems and make the world a better place.
        </p>
        
      </div>
    </div>
  );
};

export default About;
