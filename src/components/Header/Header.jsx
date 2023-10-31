import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Button } from "@material-tailwind/react";

const Header = ({ isBlackLinks = false }) => {
  return (
    <Navbar className="z-10 fixed left-0 top-0 right-0 w-screen  bg-inherit ">
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
                  isBlackLinks
                    ? "bg-black  sm:bg-inherit text-white sm:text-black hover:sm:text-amber-900"
                    : "bg-white  sm:bg-inherit text-white sm:text-white hover:sm:text-amber-900"
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
                  isBlackLinks
                    ? "bg-black  sm:bg-inherit text-white sm:text-black hover:sm:text-amber-900"
                    : "bg-white  sm:bg-inherit text-white sm:text-white hover:sm:text-amber-900"
                }`
          }
        >
          Top anime
        </NavLink>
        <NavLink
          to="/Services"
          className={({ isActive }) =>
            isActive
              ? "bg-amber-600 text-black sm:bg-inherit sm:text-amber-700 hover:sm:text-amber-900"
              : ` ${
                  isBlackLinks
                    ? "bg-black  sm:bg-inherit text-white sm:text-black hover:sm:text-amber-900"
                    : "bg-white  sm:bg-inherit text-white sm:text-white hover:sm:text-amber-900"
                }`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/Pricing"
          className={({ isActive }) =>
            isActive
              ? "bg-amber-600 text-black sm:bg-inherit sm:text-amber-700 hover:sm:text-amber-900"
              : ` ${
                  isBlackLinks
                    ? "bg-black  sm:bg-inherit text-white sm:text-black hover:sm:text-amber-900"
                    : "bg-white  sm:bg-inherit text-white sm:text-white hover:sm:text-amber-900"
                }`
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "bg-amber-600 text-black sm:bg-inherit sm:text-amber-700 hover:sm:text-amber-900"
              : ` ${
                  isBlackLinks
                    ? "bg-black  sm:bg-inherit text-white sm:text-black hover:sm:text-amber-900"
                    : "bg-white  sm:bg-inherit text-white sm:text-white hover:sm:text-amber-900"
                }`
          }
        >
          Contact
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
