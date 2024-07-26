import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">&copy; {t("footer.rigth")}</div>
    </footer>
  );
};

export default Footer;
