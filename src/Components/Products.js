import React from "react";

const Products = () => {
  const message = process.env.REACT_APP_MESSAGE;
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Products</h2>
      <div>
        <h1>{message}</h1>
        <img src={imageUrl} alt="2 cartoons" width={500}/>
      </div>
    </div>
  );
};

export default Products;
