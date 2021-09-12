import React from "react";
import { Link } from "react-router-dom";
import Logout from '../Signout/Signout';

export default function Navbar() {
  return (
    <nav className="h-20 bg-yellow-900 text-gray-600 transparent">
      <ul className="flex items-center justify-between h-full px-10">

        <Link to="/products">
          {/* <li className="text-white"> HomePage</li> */}
          <img
            src="https://cdn.discordapp.com/attachments/885753238421405736/886098588172693504/LOGO.png"
            alt="LOGO"
          />
        </Link>

        <Link to="/products">
          <li className="text-white 3xl"> Products </li>
        </Link>

        <Link to="/additem">
          <li className="text-white 3xl"> Add Item </li>
        </Link>

        <Link to="/checkout">
          <img
            src="https://i.imgur.com/H10Bbkl.png"
            alt="cart"
            style={{ width: 50, height: 50 }}
          />
        </Link>

        <Logout /> 
      </ul>
    </nav>
  );
}
