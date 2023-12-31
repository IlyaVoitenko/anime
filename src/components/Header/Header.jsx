import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Button } from "@material-tailwind/react";

const Header = ({ isBlackLinksColors = false, isBlock = false }) => {
  return (
    <Navbar
      className={`z-10  left-0 top-0 right-0 w-screen  bg-inherit ${
        isBlock ? "block " : "fixed"
      }`}
    >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Anime
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="amber" className="mr-2 sm:mr-0">
          login
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-amber-600 text-black sm:bg-inherit sm:text-amber-700 hover:sm:text-amber-900"
              : ` ${
                  isBlackLinksColors
                    ? "bg-black  sm:bg-inherit text-white sm:text-black hover:sm:text-amber-900"
                    : "bg-black   sm:bg-inherit text-white sm:text-white hover:sm:text-amber-900"
                }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/top-anime"
          className={({ isActive }) =>
            isActive
              ? "bg-amber-600 text-black sm:bg-inherit sm:text-amber-700 hover:sm:text-amber-900"
              : ` ${
                  isBlackLinksColors
                    ? "bg-black  sm:bg-inherit text-white sm:text-black hover:sm:text-amber-900"
                    : "bg-black   sm:bg-inherit text-white sm:text-white hover:sm:text-amber-900"
                }`
          }
        >
          Top anime
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
