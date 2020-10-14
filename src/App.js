import React from "react";
import productsData from "./vshoolProducts.js";
import Products from "./Products";
function App() {
  const shopObj = productsData.map((item) => (
    <Products
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return <div>{shopObj}</div>;
}

export default App;
