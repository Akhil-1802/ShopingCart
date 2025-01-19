import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../features/itemsSlice";

function Card({ items }) {
    const dispatch = useDispatch()
    const addToCart = (item) =>{
        
        dispatch(addItems(item))
    }
  return (
    <div className="my-10 grid grid-cols-3 gap-2 w-[90%] mx-auto max-xl:grid-cols-2    max-md:grid-cols-1 ">
      {items.map((item,index) => (
        <div key={index} className="w-96 h-96 max-xl:w-80  border-2 border-green-300 rounded-lg flex  justify-center flex-col gap-3">
          <div className="flex items-center justify-center">
            <img
              style={{ width: '300px', height: '200px' }}
              src={item.img_url}
              alt=""
            />
          </div>
          <div className="flex flex-col px-4 gap-2">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{item.item_name}</h1>
            <h1 className="text-xl mr-5">₹ {item.price}</h1>
            </div>
            <p>
              {item.description}
            </p>
          </div>
          <div className="text-center mt-2">
            <button onClick={() => addToCart(item)} className="bg-green-300 w-32 py-2 rounded-lg  ">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
