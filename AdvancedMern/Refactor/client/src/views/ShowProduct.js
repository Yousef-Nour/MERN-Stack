import axios from 'axios'
import React, {useState, useEffect} from 'react';
import Product from '../components/Product';
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';

const ShowProduct = props => {

    const {id} = props;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => setProduct(res.data))
        .catch(err => console.log("Something went wrong, can't retrieve product!"));
    }, [id]);

    return (
        <div>
            <Product product={product}>
                <UpdateButton productId={product._id}/>
                <DeleteButton productId={product._id} DFD={0}/>
            </Product>
        </div>
    )
}

export default ShowProduct
