import React, { useState } from "react";
import axios from "axios";
const DisplayForm = () => {
  const [result, setResult] = useState([]);
  axios.get("http://localhost:8000/api/products").then((res) => {
    setResult(res.data.products).catch((err) => {
      console.log(err);
    });
  });
  return (
    <div>
      {result.map((item, i) => (
        <p key={i}>
          {item.title},{item.price}
        </p>
      ))}
    </div>
  );
};

export default DisplayForm;
