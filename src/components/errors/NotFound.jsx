import { useTranslation } from "react-i18next";

import { Container } from "react-bootstrap"; // Import Container from Bootstrap

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <h1 className="text-center">404 - Not Found</h1>
        <p className="text-center">{t("notFound.message")}</p>
      </div>
    </Container>
  );
};

export default NotFound;
