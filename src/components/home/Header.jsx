import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import "./styles/Header.scss";

const Header = () => {
  return (
    <div className="header position-relative mt-6 overflow-hidden mb-5">
      <img
        src="images/background/decoration-star.svg"
        alt=""
        className="decoration-star position-absolute"
      />
      <img
        src="images/background/decoration-star.svg"
        alt=""
        className="decoration-star-2 position-absolute"
      />

      <Container className="position-relative z-3 mt-6">
        <Row>
          <Col lg={6}>
            <div className="mt-6 text-center">
              <h1 className="xl-text">
                <span className="text-primary">DONIYASO</span>
              </h1>
              <p className="lead mb-4">Description en bref de doniyaso</p>
              <p className="lead mb-4 text-primary">Le slogant de doniyaso</p>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="btn btn-primary btn-lg m-2"
              >
                Plus de details
              </ScrollLink>
              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg m-2"
              >
                Contactez-nous
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-container">
              <Carousel
                id="slider"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <Carousel.Item className="carousel-item active">
                  <img
                    src="images/home/image-7.jpg"
                    alt=""
                    className="d-block w-100 rounded-5"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="images/home/image-11.jpg"
                    alt=""
                    className="d-block w-100 rounded-5"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="images/home/image-12.jpg"
                    alt=""
                    className="d-block w-100 rounded-5"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="images/home/image-13.jpg"
                    alt=""
                    className="d-block w-100 rounded-5"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
