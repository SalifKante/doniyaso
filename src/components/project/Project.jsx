// Project.js
import PropTypes from "prop-types";
import "./styles/Projects.css"; // Your custom CSS

const Project = ({ imgSrc, title, description, modalId }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={imgSrc}
          className="card-img-top project-image"
          alt={title}
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modalId: PropTypes.string.isRequired,
};

export default Project;
