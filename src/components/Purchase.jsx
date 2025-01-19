import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { addOrder } from "../../features/orderSlice";
import { removeAllitems } from "../../features/itemsSlice";

function Purchase() {
    const Navigate = useNavigate()
  const { TotalPrice } = useParams();
  const dispatch = useDispatch()
  const { items }= useSelector(state => state.items)
  
    const handlePurchase = () =>{
        let itemsList=''
        let quantity = 0
        items.forEach(item => {
            itemsList = itemsList  +  item.item_name + ' '
            quantity = quantity + item.quantity
        });
        const orderList = {
            items:itemsList,
            quantity,
            TotalPrice

        }
        dispatch(addOrder(orderList))
        dispatch(removeAllitems())
        Navigate('/')

    }
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 h-auto bg-white rounded-lg shadow-lg p-6">
        <nav className="bg-green-300 p-3 text-center font-semibold text-xl rounded-t-lg">
          Purchase Summary
        </nav>
        <h1 className="mt-4 text-center font-bold text-xl">Your Items</h1>

        <div className="mt-4 space-y-4">
          {/* List the items with their names, prices, and images */}
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-3">
                <img
                  src={item.img_url}
                  alt={item.item_name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.item_name}</h2>
                  <p className="text-gray-600">₹
                    {parseInt(item.price.replace(/[^0-9]/g, ""), 10) *
                      item.quantity}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1>Quantity</h1>
                    <p>{item.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No items found in the cart.</p>
          )}
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold">Total: ₹{TotalPrice}</h2>
          <div className="mt-4 flex justify-center gap-4">
            {/* Purchase button */}
            <button
            onClick={handlePurchase}
              className="bg-green-400 px-6 py-2 text-white rounded-lg hover:bg-green-500 transition duration-200"
            >
              Purchase
            </button>
            {/* Close button */}
            <button
            onClick={()=>(Navigate('/'))}
              className="bg-red-400 px-6 py-2 text-white rounded-lg hover:bg-red-500 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
