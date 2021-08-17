import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';


const Product = (props) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+props.id)
        .then(result => setProduct(result.data));
    }, [props.id])

    return (
        <>
            <div>
                <h1>{product.title}</h1>
                <h3>{product.price}</h3>
                <h3>{product.description}</h3>
            </div>
            <div>
                <button onClick={e => {
                    axios.delete("http://localhost:8000/api/product/"+product._id)
                    .then((result) => {
                        navigate("/")
                    });
                }}>Delete</button>
            </div>
        </>
    )
}

export default Product
