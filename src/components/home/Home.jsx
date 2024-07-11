import Header from "./Header";
import Intro from "./Intro";
import Book from "./Book";
import "./styles/Home.scss";
import Download from "./Download";
const Home = () => {
  return (
    <div className="content-container mt-5 mt-md-5 mt-lg-5">
      <div className="row mt-5">
        <div className="col-12 mb-4">
          <Header />
        </div>
        <div className="col-12 mb-4">
          <Intro />
        </div>
        <div className="col-12 mb-4">
          <Book />
        </div>
        <div className="col-12 mb-4">
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Home;
