import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";

function Nav() {
  const { HandleChange, value } = useForm();

  return (
    <React.Fragment>
      <div className="header">
        <div>
          <Link className="header__link" to="/">
            Home page
          </Link>
        </div>
        <div>
          <div>
            <input
              className="input"
              type="text"
              placeholder="search"
              name="searchBar"
              value={value.searchBar}
              onChange={HandleChange}
            />
            <Link className="header__link" to={`/results/${value.searchBar}`}>
              Search
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
