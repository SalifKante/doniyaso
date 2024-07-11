import { Container, Row, Col } from "react-bootstrap";
const Intro = () => {
  return (
    <>
      {/* Introduction Section */}
      <section id="about" className="intro bg-light py-6">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>
                Lorem ipsum dolor sit amet
                <span className="text-secondary">DONIYASO</span>
              </h2>
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quod, vel unde tempora doloribus possimus, error culpa labore
                quae suscipit amet, sapiente nihil autem officia explicabo esse
                tenetur eum mollitia!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Intro;
