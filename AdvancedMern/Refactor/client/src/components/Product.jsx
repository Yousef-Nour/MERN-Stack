import React from 'react';

const Product = (props) => {

    const {product} = props;

    return (
        <>
            <div>
                <h1>{product.title}</h1>
                <h3>{product.price}</h3>
                <h3>{product.description}</h3>
            </div>
            <div>
                {
                    props.children
                }
            </div>
        </>
    )
}

export default Product
