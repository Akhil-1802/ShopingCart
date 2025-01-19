import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "../app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Purchase from "./components/Purchase.jsx";
import MyOrders from "./components/MyOrders.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Provider store={store}>
    <App />
  </Provider>
  },  
  {
      path:'/purchase/:TotalPrice',
      element:<Provider store={store}>
      <Purchase />
    </Provider>
    },
    {
      path:'/myorders',
      element:<Provider store={store}>
      <MyOrders />
    </Provider>

    }
  ])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
);
