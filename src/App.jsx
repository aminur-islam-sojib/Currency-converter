import { useState } from "react";
import "./App.css";
import { Header } from "./assets/components/Header";
import logoImage from "./assets/logo.png";
import productImage from "./assets/Untitled design.png";

function App() {
  const [cartProduct, setCartProduct] = useState([]);
  

  const productList = [
    { id: "01", name: "Product One", image: productImage },
    { id: "02", name: "Product Two", image: logoImage },
    { id: "03", name: "Product Three", image: productImage },
    { id: "04", name: "Product Four", image: logoImage },
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
            {product.image && (
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
            )}
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
