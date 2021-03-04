const Account = () => {
  return (
    <div className="account container mx-auto p-6">
      <h2>Account</h2>
      <div id="view-account" className="">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Account Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Following are valid details.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="view-info-separator">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  John Doe
                </dd>
              </div>

              <div className="view-info-separator">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  john.doe@example.com
                </dd>
              </div>

              <div className="view-info-separator">
                <dt className="text-sm font-medium text-gray-500">Position</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Administrator
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div id="add-account" className="">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3>Account Information</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Please use a valid details.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6 md:p-8 lg:p-12">
                    <div className="grid grid-cols-6 gap-6 md:gap-x-12 lg:gap-x-24">
                      <div className="separator">
                        <label for="first_name">First name</label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autocomplete="given-name"
                        />
                      </div>

                      <div className="separator">
                        <label for="last_name">Last name</label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autocomplete="family-name"
                        />
                      </div>

                      <div className="separator">
                        <label for="email_address">Email address</label>
                        <input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autocomplete="email"
                        />
                      </div>

                      <div className="separator">
                        <label for="position">Position</label>
                        <select
                          id="position"
                          name="position"
                          autocomplete="position"
                        >
                          <option>Administrator</option>
                          <option>Approver</option>
                          <option>Validator</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="button-container px-4 sm:px-6 md:px-8 lg:px-12 ">
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
