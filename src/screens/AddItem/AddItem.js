import React from "react";
import "./AddItem.css";
import LoggedNavBar from '../../components/NavBar/LoggedNavBar';
import { setProducts, selectProducts, addProducts } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { get, child, getDatabase, ref} from 'firebase/database'


export default function AddItem() {

    const [ title, setTitle ] = React.useState('')
    const [ image, setImage ] = React.useState('')
    const [ price, setPrice ] = React.useState('')

    
    const dispatch = useDispatch()

    function createItem(e) {

       
      
        e.preventDefault()
        

        const newProduct = {
            title: title, 
            src: image,
            price: price,
        }

        dispatch(addProducts(newProduct))
    }
    
  return (
    <div className="items-center flex-col body-image h-screen w-screen">
      <LoggedNavBar />
      <div className="md:flex md:justify-center p-32">
        <form>
            <div className="mt-2">
                <label className="text-white font-semibold"> Item Name: </label><br></br>
                <input className="rounded-lg py-3 px-5 outline-none" value={title} type="text" id="title" onChange={e => setTitle(e.target.value)}></input><br></br>
            </div>
            <div className="mt-2">
                <label className="text-white font-semibold"> Image URL: </label><br></br>
                <input className="rounded-lg py-3 px-5 outline-none" value={image} id="image" onChange={e => setImage(e.target.value)}></input><br></br>
            </div>
            <div className="mt-2">
                <label className="text-white font-semibold"> Price: </label><br></br>
                <input  className="rounded-lg py-3 px-5 outline-none" value={price} id="price" onChange={e => setPrice(e.target.value)}></input><br></br>
            </div>
            <button className="p-3 bg-yellow-900 mt-4 text-center rounded-full text-white" onClick={e => createItem(e)}>Add Item</button>
        </form>
      </div>
    </div>
  );
}