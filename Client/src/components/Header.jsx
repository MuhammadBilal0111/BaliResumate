import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="text-center shadow-md px-4" fluid rounded>
      <Navbar.Brand href="" className="flex gap-1">
        <img src="/logo.svg" width={40} height={40} alt="" />
        <span className="self-center whitespace-nowrap text-xl font-bold text-orange-400">
          Resume Builder
        </span>
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/resume-build"}>
          <Link to="/resume-build">Resume builder App</Link>
        </Navbar.Link>
        <Navbar.Link
          className="hover:text-red-700"
          active={path === "/resume-template"}
        >
          <Link to="/resume-templates">Resume Templates</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <Navbar.Toggle />
    </Navbar>
  );
}

export default Header;
