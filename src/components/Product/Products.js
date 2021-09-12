import React from "react";
import "./Product.pcss";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../../redux/reducer";

export default function Products(props) {

  const { src, title, price, key } = props;
  const dispath = useDispatch()

  function buttonClick() {
    dispath(addItem({ title: title, src: src, price: price}))
  }
 
  return (
    <button key={key} onClick={buttonClick} className="font-semibold capitalize transform hover:rotate-12 hover:scale-125 hover:bg-gray-200 rounded-2xl w-32 p-4 space-x-10 space-y-8 bg-gray-400 justify-center items-center  m-4">
        <div>
          <p>{title}</p>
          <img src={src} className="opacity-100" alt="product"></img>
          <p>{price}</p>
        </div>
    </button>
  );
}
