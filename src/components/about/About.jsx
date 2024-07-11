import Meet from "./Meet";
import Crew from "./Crew";

const About = () => {
  return (
    <div className="content-container mt-5 mt-md-5 mt-lg-5">
      <div className="row mt-5">
        <div className="col-12 mb-4 ">
          <Meet />
        </div>
        <div className="col-12">
          <Crew />
        </div>
      </div>
    </div>
  );
};

export default About;
