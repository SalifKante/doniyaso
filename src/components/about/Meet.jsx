import { Link as ScrollLink } from "react-scroll";
import "./styles/Meet.css";
import { useTranslation } from "react-i18next";
const Meet = () => {
  const { t } = useTranslation();
  return (
    <div className="get-quote bg-light py-6 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4 className="lh-base">{t("about.title")}</h4>
            <ScrollLink
              to="crew"
              smooth={true}
              duration={500}
              className="btn btn-primary btn-lg"
            >
              {t("about.button")}
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
