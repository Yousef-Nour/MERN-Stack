import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

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
                        return <p key={key}> <Link to={url}>{value.title}</Link> <button onClick={e => {
                            axios.delete("http://localhost:8000/api/product/"+value._id)
                            .then(result => props.DFD(value._id))
                            .catch(err => console.log("error deleting this product"));
                        }}>Delete</button> </p>
                    })
                }
            </div>
        </div>
    )
}

export default Products
