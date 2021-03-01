import background from '../images/Clipex-Wire-Testing.jpg';
import logo from '../images/logo.png';

const Home = () => {
  const title = 'Homepage';
  const description =
    'This site is for the data entry of Clipex Wire Testing Results';
  const createdBy = 'CGC Team';

  const handleViewSummary = () => {
    console.log('Clicked View Summary');
  };

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover text-white h-screen flex flex-col justify-center text-center items-center gap-12"
        style={{ backgroundImage: `url(${background})` }}
      >
        <img className="w-80" src={logo} alt="Logo" />
        <p className="p-4 text-3xl font-light">{description}</p>
        <a
          href="/#"
          className="border-2 rounded border-yellow-600 px-6 py-2 text-white bg-yellow-600 font-semibold shadow-2xl "
          onClick={handleViewSummary}
        >
          View Summary
        </a>
        <p className="p-4 text-sm shadow-inner text-gray-600 font-medium">
          Created by:{' '}
          <span className="font-bold text-gray-500">{createdBy}</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
