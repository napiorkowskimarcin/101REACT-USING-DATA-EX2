import React from "react";
function Products(props) {
  return (
    <div>
      <h2>
        Product name: {props.name} (id:{props.id})
      </h2>
      <p>Product description: {props.description}</p>
      <p>Product price: {props.price}</p>
      <p>......</p>
    </div>
  );
}

export default Products;
