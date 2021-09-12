import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import "./Checkout.css";
import LoggedNavBar from "../../components/NavBar/LoggedNavBar";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, resetCart, deleteItem } from "../../redux/reducer";

export default function Checkout( props ) {
  var total = 0;
  const state = useSelector(selectCart)
  const dispath = useDispatch()

  function emptyCart() {
    dispath(resetCart())
  }


  return (
   
    <div className="body-image h-screen w-screen">
      <LoggedNavBar />
      <div>
        <div className="flex space-x-5">
          
          {state.map((i, k) => {
            total = total + parseInt(i.price)
            console.log(i)
            return (
                <div className="font-semibold capitalize rounded-2xl w-32 p-6 text-center space-x-10 space-y-8 bg-gray-400 mt-4 ">
                  <p>{i.title}</p>
                  <img alt="Item Display"src={i.src} className="w-2/3 mr-10 "></img>
                  <p> Price: {i.price}</p>
                </div>
            )
          })}
        </div>
        

        <div className="md:justify-center p-30 justify-center items-center">
          <button className="bg-red-700 text-white mt-6 p-3 rounded-lg" onClick={emptyCart}>Empty Cart</button>
          <p className="bg-yellow-900 text-white mt-6 p-3 rounded-lg"> Total Amount: ${total}</p>
          <br></br>
          <PayPalButton
          className="transform"
          options={{
            clientId:
              "AfpZKb22nJ8iDPLJDBqdN7UlCrBoO6uAFeeib7lIeRhCoz5MU1ExdbFc9U4X4rm8DFzFAT_6dwW1n3a0",
            currency: "USD"
          }}
          amount={total}
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            console.log({ details, data });
          }}
        />
        </div>
      </div>
    </div>
  );
}
