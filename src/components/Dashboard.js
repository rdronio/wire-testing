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
        {/* Card */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Following are valid details.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="view-info-separator">
                <dt className="text-sm font-medium text-gray-500">
                  Total Results
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  1300
                </dd>
              </div>

              <div className="view-info-separator">
                <dt className="text-sm font-medium text-gray-500">Approved</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  500
                </dd>
              </div>

              <div className="view-info-separator">
                <dt className="text-sm font-medium text-gray-500">
                  More Testing Required
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  500
                </dd>
              </div>
              <div className="view-info-separator">
                <dt className="text-sm font-medium text-gray-500">Failed</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  500
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
