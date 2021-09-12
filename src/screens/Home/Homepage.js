import React from "react";
import "./Homepage.css";
import NavBar from '../../components/NavBar/AuthNavbar';
import { useHistory } from "react-router-dom";

export default function Homepage() {
  const history = useHistory()
  return (
    <div className="body-background h-screen w-screen">
      <NavBar />
      <div className="justify-center items-center p-80 font-black">
        <h1 className="text-8xl text-white text-center">Welcome to the CaveMan Adventures</h1>
      </div>
    </div>
  );
}