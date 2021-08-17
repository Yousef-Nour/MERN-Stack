import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ProductManagerForm from '../components/ProductManagerForm'
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
        setProducts([...products, product]);
    }

    const deleteFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <ProductManagerForm ANP={addNewProduct} />
            {isLoaded && <Products products={products} DFD={deleteFromDom}/>}
        </div>
    )
}

export default Main
