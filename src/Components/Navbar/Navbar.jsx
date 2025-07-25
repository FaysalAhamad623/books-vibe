import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <>
      <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
      <li><NavLink to="/listedBooks" className="rounded-lg">Listed Book</NavLink></li>
    </>
  );

  return (
    <div className="w-full bg-base-100 shadow-sm">
      <div className="navbar max-w-6xl mx-auto px-4 flex items-center justify-between">
        
        {/* Left Side: Logo + Dropdown */}
        <div className="flex items-center gap-2">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="text-xl font-semibold px-2 whitespace-nowrap">BookShelf</NavLink>
        </div>

        {/* Center (Only Desktop) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">
            {links}
          </ul>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex gap-2">
          <NavLink to="/logIn">
            <button className="btn btn-sm">Sign In</button>
          </NavLink>
          <NavLink to="/signUp">
            <button className="btn btn-sm btn-neutral">Sign Up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
