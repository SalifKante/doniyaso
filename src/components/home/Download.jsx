import "./styles/Download.scss"; // Import custom styles if necessary
import { useTranslation } from "react-i18next";

const Download = () => {
  const { t } = useTranslation();
  return (
    <section className="download">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="image-container mt-n6 mb-5">
              <img
                src="images/home/image-1.jpg"
                alt="Download Ebook"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="text-container text-white d-flex flex-column justify-content-center h-100 mb-5">
              <h2 className="fw-bold">{t("download.title")}</h2>
              <p>{t("download.description")}</p>
              {/* Form */}
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t("download.email")}
                  />
                  <button className="btn btn-primary text-white rounded-end">
                    {t("download.button")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
