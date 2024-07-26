import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Introduction Section */}
      <section id="about" className="intro bg-light py-6">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>
                {t("intro.title")}
                <span className="text-secondary"> DONIYASO</span>
              </h2>
              <p className="fs-5">{t("intro.description")}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Intro;
