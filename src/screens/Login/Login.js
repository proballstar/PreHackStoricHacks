import React from "react";
import NavBar from '../../components/NavBar/AuthNavbar';
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useHistory } from "react-router-dom";

export default function Register() {

  const history = useHistory()

  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')


  function SignInUser(e) {
    e.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCreds) => {
        return history.replace('/products')
      })
  }

  return ( 
    <div className="items-center flex-col body-background h-screen w-screen">
      <NavBar />
      <div className="md:flex md:justify-center p-32">
        <form>
          <h1 className="text-white font-extrabold text-5xl my-6" >Enter the Cave:</h1>
          <label className="text-white font-bold text-2xl"> Email: </label><br></br>
          <input className="rounded-3xl py-4 px-20 outline-none" value={email} type="text" id="email" onChange={e => setEmail(e.target.value)}></input><br></br>
          <label className="text-white font-bold text-2xl"> Password: </label><br></br>
          <input className="rounded-3xl py-4 px-20 outline-none" value={password} type="password" id="password" onChange={e => setPassword(e.target.value)}></input><br></br>
          <button className=" hover:bg-yellow-700 py-3 px-6 bg-yellow-900 mt-4 text-center rounded-2xl text-white text-2xl" onClick={e => SignInUser(e)}>Log In</button>
        </form>
      </div>
    </div>
  );
}
