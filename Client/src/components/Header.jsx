import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar className="text-center text-4xl shadow-md px-4" fluid rounded>
      <Navbar.Brand href="" className="flex gap-2">
        <img src="/logo.svg" width={40} height={40} alt="" />
        <span className="self-center whitespace-nowrap text-xl font-bold text-orange-400">
          Resume Builder
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="" className="hover:bg-orange-400">
          Resume Builder App
        </Navbar.Link>
        <Navbar.Link href="">Resume Templates</Navbar.Link>
        <Navbar.Link href="">About</Navbar.Link>
        <Navbar.Link href="">My Account</Navbar.Link>
      </Navbar.Collapse>
      <Link to="/sign-in">
        <Button
          className="bg-gradient-to-r from-orange-400 to-pink-500"
          outline
        >
          Get started
        </Button>
      </Link>
    </Navbar>
  );
}

export default Header;
