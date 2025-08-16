import { useState } from "react";
import "./App.css";
import { Header } from "./assets/components/Header";

function App() {
  const [cartProduct, setCartProduct] = useState([]);
  

  const productList = [
    { id: "01", name: "Product One" },
    { id: "02", name: "Product Two" },
    { id: "03", name: "Product Three" },
    { id: "04", name: "Product Four" },
  ];

  const addToCart = (product ) => {
    setCartProduct([...cartProduct, product])
  }

  return (
    <>
      <Header cartProduct={cartProduct} />
      <div className='flex gap-1'>
        {productList.map((product) => (
        <div key={product.id}>
          <div className="h-20 p-2 rounded-lg bg-amber-100 mb-2">
            <h1>{product.name}</h1>
          </div>
          <button onClick={() => addToCart(product)} className="btn">
            Add Product
          </button>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;
