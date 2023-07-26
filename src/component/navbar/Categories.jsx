import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Categories() {
  const myCategories = [
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <div className="categories">
      <NavLink to={"/"} className={`myCategories Home`}>
        Home
      </NavLink>
      {myCategories.map((myCategories, index) => {
        return (
          <NavLink
            to={`/${myCategories}`}
            className={`myCategories ${myCategories}`}
            key={index}
          >
            {myCategories}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Categories;
