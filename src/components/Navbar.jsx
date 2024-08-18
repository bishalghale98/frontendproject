import { useState } from "react";
import navMenu, { authMenu, userMenu } from "../constants/NavMenu";
import { Link, NavLink } from "react-router-dom";
import DarkModeTOggle from "./DarkModeToggle";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const isAuth = user ? true : false;

  const linkClass = ({ isActive }) => {
    return isActive
      ? "bg-indigo-500 text-white text-sm py-3 px-5 rounded font-semibold text-gray-900 dark:bg-gray-700 dark:text-white dark:hover:bg-slate-800 dark:hover:text-blue-300"
      : "text-sm font-semibold text-gray-900 hover:text-primary dark:bg-gray-900 dark:text-white dark:hover:bg-slate-800 dark:hover:text-blue-300";
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <header className="fixed inset-x-0 bg-white  dark:bg-gray-900 dark:text-white top-0 z-30 mx-auto w-full max-w-screen-md border py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            {/* Logo and Branding */}
            <div className="flex shrink-0">
              <Link
                aria-current="page"
                className="flex items-center dark:bg-gray-900 dark:text-white"
                to="/"
                onClick={handleMenuClick}
              >
                <p className="font-semibold text-lg text-primary">BSTORE</p>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              {navMenu.map((menu) => (
                <NavLink key={menu.id} to={menu.route} className={linkClass}>
                  {menu.label}
                </NavLink>
              ))}
            </div>
            {/* Mobile Menu Toggle and Auth Menu */}
            <div className="flex items-center justify-end gap-3 md:gap-5">
              {/* Auth Menu */}
              {authMenu
                .filter((menu) => menu.auth === isAuth)
                .map((menu) => (
                  <Link
                    key={menu.id}
                    to={menu.route}
                    onClick={handleMenuClick}
                    className="hidden md:flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white  transition-all duration-150 hover:bg-blue-500"
                  >
                    {menu.label}
                  </Link>
                ))}

              {/* dash and logout menu */}

              {userMenu
                .filter((menu) => menu.auth === isAuth)
                .map((menu) => (
                  <Link
                    key={menu.id}
                    to={menu.route}
                    onClick={handleMenuClick}
                    className="hidden md:flex md:items-center md:justify-center md:rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-blue-500"
                  >
                    {menu.label}
                  </Link>
                ))}

              {user && (
                <button // Adjust the path as needed
                  onClick={handleMenuClick}
                  className="hidden md:flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-blue-500"
                >
                  Log out
                </button>
              )}

              <div>
                <DarkModeTOggle />
              </div>
              {/* Hamburger Icon for Mobile */}
              <button
                className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-3 space-y-2">
              {navMenu.map((menu) => (
                <NavLink
                  key={menu.id}
                  to={menu.route}
                  className="block text-sm font-semibold text-gray-900 hover:text-primary dark:bg-gray-900 dark:text-white dark:hover:bg-slate-800 dark:hover:text-blue-300 border-b border-gray-500 py-2"
                  onClick={handleMenuClick}
                >
                  {menu.label}
                </NavLink>
              ))}
              {/* menu start dash and logout */}
              <div className="flex items-center gap-3">
                {userMenu
                  .filter((menu) => menu.auth === isAuth)
                  .map((menu) => (
                    <Link
                      key={menu.id}
                      to={menu.route}
                      className="flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white  transition-all duration-150 hover:bg-blue-500"
                    >
                      {menu.label}
                    </Link>
                  ))}

                {user && (
                  <button // Adjust the path as needed
                    className="flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-blue-500"
                  >
                    Log out
                  </button>
                )}
              </div>
              {/* menu end dash and logout */}

              {/* menu start login and register  */}
              <div className="flex items-center gap-3">
                {/* Auth Menu */}
                {authMenu
                  .filter((menu) => menu.auth === isAuth)
                  .map((menu) => (
                    <Link
                      key={menu.id}
                      to={menu.route}
                      className="flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white  transition-all duration-150 hover:bg-blue-500"
                    >
                      {menu.label}
                    </Link>
                  ))}
              </div>
              {/* menu end login and register  */}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className=" md:pt-20 lg:pt-20 px-4 dark:bg-gray-900 dark:text-white">
        {/* Your main content goes here */}
        <div>{/* Other content */}</div>
      </main>
    </div>
  );
};

export default Navbar;
