import React from "react";
import "./App.css";
import store from './redux/store'
import { Provider } from "react-redux";
// NavBars

//Navigation
import RegisterScreen from './screens/Register/Register';
import ProductsScreen from './screens/Products/Products';
import LoginScreen from './screens/Login/Login';
import CheckoutScreen from './screens/Checkout/Checkout';
import AddItemScreen from './screens/AddItem/AddItem';

//Screens
import HomeScreen from "./screens/Home/Homepage";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsDT88Zbl0cFiTbVQ_pRmac_wXiJ1gjR4",
  authDomain: "caveapp-be183.firebaseapp.com",
  projectId: "caveapp-be183",
  storageBucket: "caveapp-be183.appspot.com",
  messagingSenderId: "832573073991",
  appId: "1:832573073991:web:b7bde397607582e1fc5f62"
};


const apps = getApps();

if(apps.length === 0) {
initializeApp(firebaseConfig);
}

export default function App() {



  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/checkout" component={CheckoutScreen} />
        <Route path="/additem" component={AddItemScreen} />
      </Switch>
      </BrowserRouter>
    </Provider>
  )
  
}


