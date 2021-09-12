import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="h-20 bg-yellow-900 text-gray-600 transparent">
      <ul className="flex items-center justify-between h-full px-10">
        <Link to="/">
          {/* <li className="text-white"> Home</li> */}
          <img
            src="https://cdn.discordapp.com/attachments/885753238421405736/886098588172693504/LOGO.png"
            alt="LOGO"
          />
        </Link>

        <Link to="/Register">
          <li className="text-white"> Register </li>
        </Link>
        
        <Link to="/Login">
          <li className="text-white"> Login </li>
        </Link>

      </ul>
    </nav>
  );
}
