import React from 'react';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

const Products = (props) => {

    
    return (
        <div>
            <div>
                <h3>All products</h3>
            </div>
            <div>
                {
                    props.products.map((value, key) => {
                        let url = "/product/"+value._id;
                        return <p key={key}>
                                    <Link to={url}>{value.title}</Link>
                                    <DeleteButton productId={value._id} DFD={props.DFD}/>
                                </p>
                    })
                }
            </div>
        </div>
    )
}

export default Products
