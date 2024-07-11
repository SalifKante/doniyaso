import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./Navigation.scss"; // Import custom styles if necessary

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // State to manage Offcanvas menu visibility
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageDropdown(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMenuClose = () => setExpanded(false); // Function to close the Offcanvas menu

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add 'active' class to current link on initial load and when location changes
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
      if (location.pathname === linkPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Close menu when a link is clicked (for small screens)
    if (expanded) {
      setExpanded(true);
    }
  }, [location.pathname, expanded]);

  return (
    <Navbar
      expand="lg"
      className={`navbar-light bg-transparent fixed-top ${
        isScrolled ? "navbar-sticky" : ""
      }`}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleMenuClose}>
          <img src="/images/logo/doniyaso.jpeg" alt="Doniyaso" width="350" />
          <span className="logo-color fw-bold fs-3">Doniyaso</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Offcanvas
          show={expanded}
          onHide={() => setExpanded(false)}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel"
              className="text-primary fs-4"
            >
              Doniyaso
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                onClick={handleMenuClose}
              >
                {t("navbar.home")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="nav-link"
                onClick={handleMenuClose}
              >
                {t("navbar.about")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/service"
                className="nav-link"
                onClick={handleMenuClose}
              >
                {t("navbar.service")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/project"
                className="nav-link"
                onClick={handleMenuClose}
              >
                {t("navbar.project")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/gallery"
                className="nav-link"
                onClick={handleMenuClose}
              >
                {t("navbar.galerie")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link"
                onClick={handleMenuClose}
              >
                {t("navbar.contact")}
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              <a
                href="https://www.facebook.com/profile.php?id=100063692631818&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="fa-stack fs-5 me-2"
              >
                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="fa-stack-1x text-white"
                />
              </a>
              <div className="language-dropdown">
                <button
                  className="btn btn-circle"
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                >
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="fa-2x text-primary"
                  />
                </button>
                {showLanguageDropdown && (
                  <div className="language-list">
                    <button
                      onClick={() => changeLanguage("en")}
                      className="language-item"
                    >
                      <span className="flag-icon flag-icon-us"></span> English
                    </button>
                    <button
                      onClick={() => changeLanguage("fr")}
                      className="language-item"
                    >
                      <span className="flag-icon flag-icon-fr"></span> Français
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
