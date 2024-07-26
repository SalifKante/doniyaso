import "./styles/Book.scss"; // Import custom styles if necessary
// import descriptionImg from "images/home/image-1.jpg"; // Ensure the image path is correct
import { useTranslation } from "react-i18next";

const Book = () => {
  const { t } = useTranslation();

  return (
    <section id="details" className="details my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container d-flex flex-column justify-content-center h-100">
              <h2 className="display-6">{t("book.title")}</h2>
              <p>{t("book.description")}</p>
              <ul className="list-group list-group-flush lh-lg">
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  Intelligence machine en Afrique en 20 question
                </li>
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  {t("book.comment")}
                </li>
                <li className="list-group-item">
                  <strong>Author Names:</strong>
                  <div className="mt-2">
                    <p>
                      Modibo Bouare, Dr. Sidy Danioko, Mariam Dembele, Pr.
                      Abdoulaye Banire Diallo,
                    </p>
                    <p>
                      Boubacar Diallo, Abdoulaye Diarra, Bourama Doumbia, Ndeye
                      Sissoko Molinier,
                    </p>
                    <p>
                      Astou Nathalie Sidibe, Allashera Auguste Tapo, Hamidou
                      Tembine
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-container p-5">
              <img
                src="images/home/image-1.jpg"
                alt="Description"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
