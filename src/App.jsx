import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";


function App() {
  
  const [item, setitems] = useState([
    {
      "item_name": "Laptop",
      "description": "A powerful laptop with 16GB RAM and a 512GB SSD for smooth performance.",
      "img_url": "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      "price": "1,00,999",
      "quantity":1
    },
    {
      "item_name": "Smartphone",
      "description": "A sleek smartphone with a 6.5-inch OLED display and 128GB storage.",
      "img_url": "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
      "price": "59,999",
      "quantity":1
    },
    {
      "item_name": "Headphones",
      "description": "Noise-cancelling over-ear headphones with superior sound quality.",
      "img_url": "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
      "price": "14,999",
      "quantity":1
    },
    {
      "item_name": "Smartwatch",
      "description": "A stylish smartwatch with fitness tracking and heart rate monitoring.",
      "img_url": "https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      "price": "18,999",
      "quantity":1
    },
    {
      "item_name": "Gaming Console",
      "description": "Next-gen gaming console with 4K graphics and a large library of games.",
      "img_url": "https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=400",
      "price": "37,999",
      "quantity":1
    },
    {
      "item_name": "Bluetooth Speaker",
      "description": "Portable Bluetooth speaker with deep bass and 12 hours of battery life.",
      "img_url": "https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg?auto=compress&cs=tinysrgb&w=400",
      "price": "9,499",
      "quantity":1
    },
    {
      "item_name": "Digital Camera",
      "description": "High-resolution digital camera with a 20MP sensor and optical zoom.",
      "img_url": "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=400",
      "price": "64,999",
      "quantity":1
    },
    {
      "item_name": "Electric Scooter",
      "description": "Eco-friendly electric scooter with a 30-mile range and a top speed of 20mph.",
      "img_url": "https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=400",
      "price": "52,999",
      "quantity":1
    },
    {
      "item_name": "Drone",
      "description": "Compact drone with 4K video recording and GPS navigation.",
      "img_url": "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=400",
      "price": "25,999",
      "quantity":1
    }
  ]
  
  );
  return (
    <>
      <Navbar />

      <Card items={item || []} />
    </>
  );
}

export default App;
