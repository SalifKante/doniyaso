// ProjectModal.js
import PropTypes from "prop-types";
import "./styles/Projects.css"; // Your custom CSS

const ProjectModal = ({ id, imgSrc, title, details }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src={imgSrc} className="img-fluid" alt={title} />
            {details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectModal;
