const Dashboard = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const total_results = 1300;
  const total_approved = 500;
  const total_retest = 500;
  const total_failed = 300;

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <section>
      <div
        id="head"
        className="bg-white shadow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
      >
        <div className="">
          <h2 className="">Dashboard</h2>
        </div>
      </div>
      <div id="body" className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* <!-- Replace with your content --> */}
        <div className="px-4 py-6 sm:px-0">
          <div className="card">
            <h3>Date Today </h3>
            <p>{date}</p>
          </div>
          <div className="card">
            <h3>Total Results </h3>
            <p>{total_results}</p>
          </div>
          <div className="card">
            <h3>Approved </h3>
            <p>{total_approved}</p>
          </div>
          <div className="card">
            <h3>More Testing Required</h3>
            <p>{total_retest}</p>
          </div>
          <div className="card">
            <h3>Failed </h3>
            <p>{total_failed}</p>
          </div>
        </div>
        {/* <!-- /End replace --> */}
      </div>
    </section>
  );
};

export default Dashboard;
