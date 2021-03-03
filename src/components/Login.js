import { ReactComponent as Logo } from "../logo.svg";
const Login = () => {
  return (
    <section
      id="login"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-sm w-full space-y-8">
        <div>
          <img className="w-32" src={Logo} alt="" srcset="" />
          <h2>Sign in to your account</h2>
        </div>
        <htmlForm className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm ">
            <div className="mt-2">
              <label htmlFor="email-address">Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" />
              <label htmlFor="remember_me" className="remember-me">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="forgot-password">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg
                  className="h-5 w-5 text-blue-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </htmlForm>
      </div>
    </section>
  );
};

export default Login;
