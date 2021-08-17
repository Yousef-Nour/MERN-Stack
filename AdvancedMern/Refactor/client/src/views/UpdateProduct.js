import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Form from '../components/Form';

const UpdateProduct = props => {

    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+props.id)
        .then(result => 
            {
                setProduct(result.data)
                setLoaded(true)
             console.log(result.data);
            }
        )
        .catch(err => console.log("Can't find this product"));
    },[props.id]);

    const updateHandler = newProduct => {
        axios.put("http://localhost:8000/api/product/"+props.id+"/edit", newProduct)
        .then(res => {
            navigate("/product/"+props.id);
        });
    }

    return (
        <div>
        { 
            loaded && <Form initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} ANP={updateHandler}/>
        }
        </div>
    )
}

export default UpdateProduct
