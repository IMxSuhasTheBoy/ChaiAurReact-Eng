import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 border-b border-sky-500">
      <nav className="bg-slate-900 border-gray-200 px-4 lg:px-6 py-2.5 text-slate-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
              style={{
                filter: "invert(1)",
              }}
            />
          </Link>

          {/* Login Button */}
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-200 bg-sky-600 hover:bg-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-gray-200 bg-orange-500 hover:bg-sky-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>

          {/* Navigation Links/Menu */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block  py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 ${
                      isActive ? "text-orange-500" : "text-slate-300"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block  py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-slate-300"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block  py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-slate-300"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-slate-300"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-orange-500"
                                            : "text-slate-300"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
