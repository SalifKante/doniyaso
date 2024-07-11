// Projects.js
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Projects.css"; // Your custom CSS
import PropTypes from "prop-types";

const projectData = [
  {
    id: "project1",
    imgSrc: "images/projects/project-1.png",
    title: "Orkla Foods",
    description: "Donec bibeum mollis liga sit amet pulvinar sed viverra noris",
    modalDetails: [
      "Aliquam at accumsan nibh. Praesent pretium ut tortor ac commodo.",
      "Integer semper quam at rutrum interdum. Mauris eu diam ac urna laoreet mollis et.",
      "Praesent lacus tortor, facilisis non enim eu, luctus semper velit. Curabitur faucibus diam in lectus.",
    ],
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className=" container projects my-6">
      <div className="content-container mt-5 mt-md-5 mt-lg-5">
        <div className="row mb-5">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <h5>
              <span className="badge bg-primary rounded-0 text-uppercase mt-5">
                Projects
              </span>
            </h5>
            <h2 className="fw-bold">Projects We Are Proud Of</h2>
            <p>
              We take pride in our successful projects and the value they bring
              to our clients. With our expertise and dedication, we have
              delivered exceptional results. Here are some highlights.
            </p>
          </div>
        </div>

        <div className="row">
          {projectData.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              modalId={project.id}
            />
          ))}
        </div>

        <div className="project-modals">
          {projectData.map((project) => (
            <ProjectModal
              key={project.id}
              id={project.id}
              imgSrc={project.imgSrc}
              title={project.title}
              details={project.modalDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      modalDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};

export default Projects;
