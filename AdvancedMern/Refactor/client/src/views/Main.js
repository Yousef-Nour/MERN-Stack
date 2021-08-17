import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Form from '../components/Form';
import Products from '../components/Products'

const Main = (props) => {
    const [products, setProducts]=useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => setProducts(res.data))
        .then(() => setIsLoaded(true))
        .catch(err => "Can't retrieve data from server!");
    },[]);

    const addNewProduct = product =>{
        axios.post("http://localhost:8000/api/products/new", product)
        .then(res => setProducts([...products, res.data]));
    }

    const deleteFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <Form initialTitle="" initialPrice= {0} initialDescription="" ANP={addNewProduct} />
            {isLoaded && <Products products={products} DFD={deleteFromDom}/>}
        </div>
    )
}

export default Main
