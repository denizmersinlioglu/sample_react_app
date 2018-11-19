/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const navbar = ({ totalCounters }) => {
  console.log('Navbar - Rendered');
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default navbar;
