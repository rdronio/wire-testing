import { Link } from "react-router-dom";
import background from "../images/Clipex-Wire-Testing.jpg";
import logo from "../images/logo.png";

const Home = () => {
  const title = "Clipex Wire Testing System";
  const description =
    "This site is for the data entry of Clipex Wire Testing Results";
  const createdBy = "CGC Team";

  const handleCTA = () => {
    console.log("Clicked CTA");
  };

  return (
    <section
      id="home"
      className="bg-no-repeat bg-cover text-white h-screen flex flex-col justify-center text-center items-center gap-12"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img className="w-80" src={logo} alt="Logo" />
      <div>
        <p className="py-0.5 text-3xl font-bold">{title}</p>
        <p className="py-0.5 text-xl font-normal text-gray-400">
          {description}
        </p>
      </div>

      <Link
        to="/login"
        id="login-button"
        className="border-2 rounded border-yellow-600 px-14 py-2 text-white bg-yellow-600 font-semibold shadow-2xl hover:bg-yellow-500 hover:border-yellow-500"
        onClick={handleCTA}
      >
        Continue
      </Link>

      <p className="text-sm shadow-inner text-gray-600 font-medium">
        Created by: <span className="font-bold text-gray-500">{createdBy}</span>
      </p>
    </section>
  );
};

export default Home;
