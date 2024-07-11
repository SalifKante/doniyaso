import "./styles/Download.scss"; // Import custom styles if necessary

const Download = () => {
  return (
    <section className="download">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="image-container mt-n6 mb-5">
              <img
                src="images/home/image-1.jpg"
                alt="Download Ebook"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="text-container text-white d-flex flex-column justify-content-center h-100 mb-5">
              <h2 className="fw-bold">Get Your Free Ebook Now</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                architecto ratione excepturi neque nobis maxime?
              </p>
              {/* Form */}
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  <button className="btn btn-primary text-white rounded-end">
                    Download
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
