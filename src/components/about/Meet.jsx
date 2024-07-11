import { Link as ScrollLink } from "react-scroll";
const Meet = () => {
  return (
    <div className="get-quote bg-light py-6 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4 className="lh-base">
              Rencontrez notre équipe compétente, prête à répondre à tous vos
              besoins variés
            </h4>
            <ScrollLink
              to="crew"
              smooth={true}
              duration={500}
              className="btn btn-primary btn-lg"
            >
              Rencontrer
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Meet;
