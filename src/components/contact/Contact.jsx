import { Container } from "react-bootstrap";
import "./styles/Contact.scss";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  /*
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send email using a backend service)
    console.log(formData); // For demonstration, log form data to console
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
*/
  return (
    <>
      <section id="contact" className="contact mt-6 position-relative">
        <img
          src="images/decoration-star.svg"
          alt=""
          className="decoration-star position-absolute"
        />

        <Container className="position-relative z-3 mt-5 mt-md-5 mt-lg-5">
          <div className="row">
            <div className="col-lg-6 d-none d-md-block">
              <div className="image-container">
                <img
                  src="./images/logo/doniyaso.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                <h2>{t("contact.title")}</h2>

                <form id="form">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("contact.name")}
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("contact.email")}
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("contact.phone")}
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder={t("contact.message")}
                      rows="8"
                      id="message"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2">
                    <input
                      type="submit"
                      value={t("contact.submit")}
                      className="btn btn-primary btn-block"
                      id="button"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="location my-5">
        <Container>
          <div className="row">
            <div className="col-10 offset-1">
              <h2>{t("contact.place")}</h2>
              <p className="mb-4 fs-4">
                Bamako, Mali | Hamdallaye ACI 2000 | {t("contact.location")} la
                &quot;Bougie&quot; | +223-76-49-49-05 | lezybko@gmail.com
              </p>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31145.922655423125!2d-8.061563653454836!3d12.632232491935108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cc5df81b5b11%3A0x572b6d6dbdd05f4!2sACI%202000%2C%20Bamako%2C%20Mali!5e0!3m2!1sen!2sus!4v1720153616639!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
