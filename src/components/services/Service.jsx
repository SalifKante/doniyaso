// Services.js (assuming you're using React)
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Services.css"; // Your custom CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faKey,
  faNewspaper,
  faUsers,
  faHandshake,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="takeaways my-5 bg-light">
      <div className="container mt-5 mt-md-5 mt-lg-5">
        <div className="row text-center mb-5 mt-5">
          <div className="col-md-8 offset-md-2">
            <h2>{t("service.title")}</h2>
            <p className="lead">{t("service.description")}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon
                  icon={faAtom}
                  className="fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 className="card-title">{t("service.science")}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon
                  icon={faKey}
                  className="fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 className="card-title">{t("service.cyber")}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 className="card-title">{t("service.industry")}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 className="card-title">{t("service.collaborate")}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 className="card-title">{t("service.partner")}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 rounded-0 border-0 p-3">
              <div className="card-body text-center">
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 className="card-title">{t("service.insigth")}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
