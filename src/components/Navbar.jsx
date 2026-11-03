import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-300/80 text-base-content border-b border-base-content/10 px-4 md:px-10">
      {/* Logo */}
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-xl font-bold gap-1">
          <span className="text-secondary text-2xl">✦</span>
          Kahan<span className="text-secondary">AI</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#zones">Explore Zones</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>

      {/* Actions */}
      <div className="navbar-end gap-2">
        <a href="#library" className="btn btn-ghost btn-sm hidden sm:flex">
          My Stories
        </a>
        <a href="#create" className="btn btn-secondary btn-sm">
          <span>✦</span> Create Story
        </a>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <button
            tabIndex={0}
            className="btn btn-square btn-ghost"
            aria-label="Open navigation menu"
          >
            ☰
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-200 rounded-box z-10 mt-3 w-52 p-2 shadow-xl"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#zones">Explore Zones</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#library">My Stories</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
