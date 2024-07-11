import "./styles/Book.scss"; // Import custom styles if necessary
// import descriptionImg from "images/home/image-1.jpg"; // Ensure the image path is correct

const Book = () => {
  return (
    <section id="details" className="details my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container d-flex flex-column justify-content-center h-100">
              <h2 className="display-6">Our Book</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                veritatis earum consectetur reprehenderit possimus nobis
                aspernatur neque. Quasi, quidem vitae odio amet magni sed modi
                beatae animi corporis. Et, doloribus!
              </p>
              <ul className="list-group list-group-flush lh-lg">
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  <strong> Unleash Your Creativity:</strong> Our ebook empowers
                  you to unleash your creativity and express your unique voice
                  through your blog.
                </li>
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  <strong> Maximize Your Reach:</strong> Learn how to optimize
                  your blog for searching engines.
                </li>
                <li className="list-group-item">
                  <i className="fas fa-square text-primary"></i>
                  <strong> Monetization Strategies:</strong> Discover various
                  monetization strategies, such as sponsored content & affiliate
                  marketing.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-container p-5">
              <img
                src="images/home/image-1.jpg"
                alt="Description"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
