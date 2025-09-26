import React from 'react';
import imagPlus from "../assets/Vector.png"
const Navbar = () => {
  return (
    <div className="navbar m-2">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="md:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <li><a className='btn bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white'><img src={imagPlus} className='w-2 h-2' alt="" />New Ticket</a></li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;