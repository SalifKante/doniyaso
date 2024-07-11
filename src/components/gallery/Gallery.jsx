import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Gallery.css";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const images = [
  { src: "images/home/image-2.jpg", title: "Doniyaso - Event" },
  { src: "images/home/image-3.jpg", title: "Doniyaso - Event" },
  { src: "images/home/image-4.jpg", title: "Doniyaso - Event" },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="portfolio py-5 bg-light">
      <div className="content-container mt-5 mt-md-5 mt-lg-5">
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">Gallery</h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">Doniyaso Events - Conference - Internship</h2>
          <p className="lead">Big Moments at Doniyaso</p>
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="project shadow-lg rounded-5">
                <img
                  src={image.src}
                  alt={image.title}
                  className="img-fluid rounded-3"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          images={images.map((image) => ({
            url: image.src,
            title: image.title,
          }))}
          onClose={() => setIsOpen(false)}
          startIndex={photoIndex}
        />
      )}
    </section>
  );
};

export default Gallery;
