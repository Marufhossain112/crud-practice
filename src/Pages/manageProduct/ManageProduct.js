import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ManageProduct = () => {
  const products = useLoaderData();
  console.log(products);
  const handleDelete = (product) => {
    // console.log(`I am deleting ${id}`);
    const agree = window.confirm(`Are you sure to delete ${product.name}`);
    if (agree) {
      fetch(`http://localhost:5000/informs/${product._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
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
            {
              <button
                onClick={() => handleDelete(pdc)}
                className="btn btn-active btn-ghost"
              >
                X
              </button>
            }
          </p>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
