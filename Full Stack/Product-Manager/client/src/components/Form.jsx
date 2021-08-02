import React, { useState } from "react";
import axios from "axios";
const Form = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products/new", {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label>Price</label>
        <input onChange={(e) => setPrice(e.target.value)} />
        <label>Description</label>
        <input onChange={(e) => setDescription(e.target.value)} />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};
export default Form;
