import React, { useState } from "react";

const AddProduct = () => {
  const [user, setUser] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  const handleBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    // console.log(field, value);
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h2>Please add product</h2>
      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <input
            onBlur={handleBlur}
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered w-1/2 my-2 "
          />{" "}
          <br />
          <input
            onBlur={handleBlur}
            type="text"
            placeholder="Price"
            className="input input-bordered w-1/2 my-2 "
            name="price"
          />{" "}
          <br />
          <input
            onBlur={handleBlur}
            type="text"
            placeholder="quantity"
            className="input input-bordered w-1/2 my-2 "
            name="quantity"
          />{" "}
          <br />
          <input
            onBlur={handleBlur}
            type="text"
            placeholder="address"
            className="input input-bordered w-1/2 my-2 "
            name="address"
          />{" "}
          <br />
          <button className="btn mt-2">Button</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
