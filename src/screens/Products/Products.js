import React from "react";
import NavBar from '../../components/NavBar/LoggedNavBar';
import Product from '../../components/Product/Products';
import { useDispatch, useSelector } from "react-redux";
import { setProducts, selectProducts } from "../../redux/reducer";
import './Products.css'
// Import the functions you need from the SDKs

export default function Products(props) {
  const products = useSelector(selectProducts)

  return (
    <div className="body-image h-screen w-screen">
      <NavBar />
          {products.map((i, k) => {
            return (
              <Product
                key={k}
                title={i.title}
                src={i.src}
                price={i.price}
              />
            )
          })}
    </div>
  );
}
