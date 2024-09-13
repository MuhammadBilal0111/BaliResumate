import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar className="text-center shadow-md px-4" fluid rounded>
      <Navbar.Brand href="" className="flex gap-2">
        <img src="/logo.svg" width={40} height={40} alt="" />
        <span className="self-center whitespace-nowrap text-xl font-bold text-orange-400">
          Resume Builder
        </span>
      </Navbar.Brand>
      <div className="flex gap-2">
        <Link to="/sign-in">
          <Button
            className="bg-gradient-to-r from-orange-400 to-pink-500"
            outline
          >
            Get started
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="" className="hover:bg-orange-400">
          Resume Builder App
        </Navbar.Link>
        <Navbar.Link href="" className="hover:bg-orange-400">
          Resume Templates
        </Navbar.Link>
        <Navbar.Link href="" className="hover:bg-orange-400">
          About
        </Navbar.Link>
        <Navbar.Link href="" className="hover:bg-orange-400">
          My Account
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
