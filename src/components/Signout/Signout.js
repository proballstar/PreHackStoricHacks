import React from "react";
import "./Signout.css";
import { getAuth, signOut } from 'firebase/auth'
import { useHistory } from "react-router";

export default function SignOut() {

  const history = useHistory()
  
  function _signOut() {
    const auth = getAuth()
    signOut(auth)
    history.replace('/')
  }

  return (
    <div>
      <button onClick={_signOut} className="text-white">Signout</button>
    </div>
  );
}
