import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { BiSearch } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Categories from "./Categories";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  function dropdown(e) {
    e.stopPropagation();
    setDropDown(true);
  }
  function searchbar(e) {
    e.stopPropagation();
    setSearchBar(true);
  }
  function hide() {
    setDropDown(false);
    // setSearchBar(false);
  }
  function hide2(e) {
    e.stopPropagation();
    setSearchBar(false);
  }
  return (
    <div onClick={hide} className="navbar">
      <div className={dropDown ? "dropdown-show" : "dropdown-hide"}>
        <ul className="dropdown-list">
          <RxCross2 onClick={hide} className="RxCross2" />
          <NavLink to={"/"} className="dropdown-item">
            Home
          </NavLink>
          <NavLink to={"/about"} className="dropdown-item">
            About
          </NavLink>
          <NavLink to={"/contact"} className="dropdown-item">
            Contact
          </NavLink>
          <NavLink to={"/login"} className="dropdown-item">
            Log In
          </NavLink>
          <NavLink to={"/signup"} className="dropdown-item">
            Sign Up
          </NavLink>
        </ul>
      </div>
      <div className="header">
        <BiMenu onClick={(e) => dropdown(e)} className="BiMenu" />
        <h1>Live News</h1>
        <BiSearch className="BiSearch" onClick={(e) => searchbar(e)} />
      </div>
      <div className={searchBar ? "searchdiv-show" : "searchdiv-hide"}>
        <div className="crossdiv">
          <RxCross2
            onClick={(e) => {
              hide2(e);
            }}
            className="RxCross3"
          />
        </div>
        <div className="inputdiv">
          <input
            name="text"
            type="text"
            className="search"
            placeholder="write something for search......."
          />
        </div>
      </div>
      <Categories />
    </div>
  );
}

export default Navbar;
