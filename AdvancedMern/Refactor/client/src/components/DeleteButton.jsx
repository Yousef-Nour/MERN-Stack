import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react'

const DeleteButton = props => {

    const {productId} = props;

    const handleClick = e => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/product/"+productId)
        .then(res => {
            props.DFD && props.DFD(productId);
            navigate("/");
        })
        .catch(err => console.log("Can't delete this product", err));
    };

    return (
        <button onClick={handleClick}>
            Delete
        </button>
    )
}

export default DeleteButton
