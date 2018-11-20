/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const navbar = ({ totalCounters }) => {
  console.log('Navbar - Rendered');
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <h4>Navbar</h4>
        <span className="m-2 badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default navbar;
