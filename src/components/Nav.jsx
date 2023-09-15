// Nav.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Nav({ setSearchQuery }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput.trim()); // No need to convert to lowercase here
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          {/* ... Other nav items */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearchInputChange}
              value={searchInput}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={handleSearchButtonClick}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Nav;
