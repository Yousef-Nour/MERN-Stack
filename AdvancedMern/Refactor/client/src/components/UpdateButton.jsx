import { navigate } from '@reach/router';
import React from 'react';

const UpdateButton = props => {

    const {productId} = props;

    const handleClick = e => {
        e.preventDefault();
        navigate("/product/"+productId+"/edit")
    }
    return (
        <button onClick={handleClick}>
            Update
        </button>
    )
}

export default UpdateButton
