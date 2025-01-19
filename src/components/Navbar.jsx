import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function Navbar() {
  const { items } = useSelector((state) => state.items);
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = (e) => {
    if (e.target === e.currentTarget) {
      setShowCart(false);
    }
  };

  return (
    <>
      {/* Conditionally show the cart and apply transitions */}
      {showCart && (
        <div
          onClick={handleShowCart}
          className={`w-full backdrop-blur-sm min-h-screen inset-0 fixed z-20 overflow-scroll overflow-x-hidden bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
            showCart ? "opacity-100" : "opacity-0"
          }`}
        >
          <Cart setShowCart={setShowCart} />
        </div>
      )}

      <header className="w-full bg-green-400">
        <nav className="flex justify-between items-center p-5 px-20">
          <h1 className="text-2xl ">My own Shopping Cart</h1>
          <div className="flex justify-evenly gap-10">
            <Link to={'/myorders'}><h1 className="cursor-pointer">My Orders</h1></Link>
            <div
              onClick={() => setShowCart((prevState) => !prevState)}
              className="cursor-pointer relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 6H22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="6"
                  cy="20"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="17"
                  cy="20"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 20L15 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              {items.length > 0 && (
                <span className="bg-yellow-300 p-1 absolute rounded-full text-[8px] -top-1 -right-1">
                  {items.length}
                </span>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
