import React from "react";
import { Link, NavLink } from "react-router-dom";
import Stays from "./Stays";
import Experien from "./Experien";
import OnlineExp from "./OnlineExp";
import YourHome from "./YourHome";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex-col items-center bg-zinc-400">
        <img src="" alt="skybnb" className="mt-4 ml-3"></img>
        <div className="navup mb-4">
            <ul className = "flex space-x-10 justify-center">
              <NavLink to="/Stays">Stays</NavLink>
              <Link to="/Experien">Experiences</Link>
              <Link to="/OnlineExp">Online Experiences</Link>
              <Link to="/YourHome">SkyBNB your Home</Link>
              {/* <Link className="ml-auto">Profile icon</Link> */}
            </ul>
          </div>
          <div className="navlow mb-4">
            <ul className="flex space-x-3 justify-center">
              <Link to="#">Where</Link>
              <Link to="#">Check in</Link>
              <Link to="#">Check out</Link>
              <Link to="#">Who</Link>
            </ul>
          </div>
      </div>
    </>
  );
};

export default Navbar;
