import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems, setQuantity } from "../../features/itemsSlice";
import Purchase from "./Purchase";
import { useNavigate } from "react-router-dom";

function Cart({ setShowCart }) {
  const Navigate = useNavigate()
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const removefromCart = (item) => {
    dispatch(removeItems(item.id));
  };

  const handleQuantity = (id, e) => {
    const quantity = parseInt(e.target.value, 10);
    if (!isNaN(quantity)) {
      dispatch(setQuantity({ id, quantity }));
    }
  };

  const handlePurchase = () => {
    let calculatedTotalPrice = 0;
  
    // Calculate the total price first
    items.forEach((item) => {
      calculatedTotalPrice += parseInt(item.price.replace(/[^0-9]/g, ""), 10) * item.quantity;
    });
  
  
    // After calculating the total price, navigate with it
    Navigate(`/purchase/${calculatedTotalPrice}`);
  };



  return (
    <>

      <div className="w-[40%] max-lg:w-1/2 max-md:w-full fixed right-0 bg-gray-50 min-h-screen rounded-md overflow-y-auto">
        <nav className="bg-green-400 p-5 flex justify-between px-10 items-center">
          <h1 className="text-xl">Your Cart</h1>
          <svg
            className="cursor-pointer"
            onClick={() => setShowCart((showCart) => !showCart)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <path
              d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </nav>

        {items.length === 0 ? (
          <h1 className="text-2xl text-center mt-10">No items in the Cart</h1>
        ) : (
          <>
            <div className="my-10 flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 w-[80%] border-2 h-48 mx-auto border-green-300"
                >
                  <div className="flex justify-center items-center mx-4">
                    <img
                      className=""
                      style={{ width: "240px", height: "120px" }}
                      src={item.img_url}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold">{item.item_name}</h1>

                    <div className="flex gap-5 items-center">
                      <label>Quantity:</label>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantity(item.id, e)}
                        className="w-10"
                      />
                    </div>
                    <h2>
                      Price: ₹
                      {parseInt(item.price.replace(/[^0-9]/g, ""), 10) *
                        item.quantity}
                    </h2>
                    <div className="mt-2">
                      <button
                        onClick={() => removefromCart(item)}
                        className="bg-red-400 px-3 py-1.5 rounded-lg"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-10">
              <button onClick={handlePurchase} className="bg-green-400 px-4 py-2 rounded-lg">
                Purchase
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
