import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Crew.css"; // Your custom CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Crew = () => {
  return (
    <section id="crew">
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card crew-card">
              <img
                src="./images/directeur-general.JPG"
                className="card-img-top profile"
                alt="Dr. DANIOKO Sidy"
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-2">Dr. DANIOKO Sidy</h5>
                <h6 className="card-subtitle mt-4 mb-2 text-muted">
                  President - USA
                </h6>
              </div>
              <div className="card-footer social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card crew-card">
              <img
                src="./images/about/doumbia-bourama.jpeg"
                className="card-img-top profile"
                alt="M. DOUMBIA Bourama"
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-2">M. DOUMBIA Bourama</h5>
                <h6 className="card-subtitle mt-4 mb-2 text-muted">
                  Le Secretaire General - Bamako
                </h6>
              </div>
              <div className="card-footer social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card crew-card">
              <img
                src="./images/about/tembine.jpg"
                className="card-img-top profile"
                alt="Dr. TEMBINE Hamidou"
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-2">Dr. TEMBINE Hamidou</h5>
                <h6 className="card-subtitle mt-4 mb-2 text-muted">France</h6>
              </div>
              <div className="card-footer social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card crew-card">
              <img
                src="./images/about/kante-salif.jpg"
                className="card-img-top profile"
                alt="M. KANTE Salif"
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-2">M. KANTE Salif</h5>
                <h6 className="card-subtitle mt-4 mb-2 text-muted">
                  Doctorant en Intelligence Artificielle - Russia
                </h6>
              </div>
              <div className="card-footer social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card crew-card">
              <img
                src="./images/about/diallo-boubacar.jpg"
                className="card-img-top profile"
                alt="M. DIALLO Boubacar"
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-2">M. DIALLO Boubacar</h5>
                <h6 className="card-subtitle mt-4 mb-2 text-muted">
                  Some Position
                </h6>
              </div>
              <div className="card-footer social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card crew-card">
              <img
                src="./images/another-person.JPG"
                className="card-img-top profile"
                alt="Another Person"
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-2">Another Person</h5>
                <h6 className="card-subtitle mt-4 mb-2 text-muted">
                  Some Position
                </h6>
              </div>
              <div className="card-footer social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card crew-card">
              <img
                src="./images/another-person.JPG"
                className="card-img-top profile"
                alt="Another Person"
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-2">Another Person</h5>
                <h6 className="card-subtitle mt-4 mb-2 text-muted">
                  Some Position
                </h6>
              </div>
              <div className="card-footer social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card crew-card">
              <img
                src="./images/another-person.JPG"
                className="card-img-top profile"
                alt="Another Person"
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-2">Another Person</h5>
                <h6 className="card-subtitle mt-4 mb-2 text-muted">
                  Some Position
                </h6>
              </div>
              <div className="card-footer social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card crew-card">
              <img
                src="./images/another-person.JPG"
                className="card-img-top profile"
                alt="Another Person"
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-2">Another Person</h5>
                <h6 className="card-subtitle mt-4 mb-2 text-muted">
                  Some Position
                </h6>
              </div>
              <div className="card-footer social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
