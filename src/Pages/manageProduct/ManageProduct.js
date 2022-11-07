import React from "react";
import { useLoaderData } from "react-router-dom";

const ManageProduct = () => {
    
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
      <h2 className="text-center text-3xl mt-3">
        Manage product.{products.length}
      </h2>
      <div className="text-center mt-3">
        {products.map((pdc) => (
          <p key={pdc._id}>
            {" "}
            {pdc.name} {pdc.address}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
