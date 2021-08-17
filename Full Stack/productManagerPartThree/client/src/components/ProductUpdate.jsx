import axios from 'axios';
import React, {useState, useEffect} from 'react';

const ProductUpdate = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const {id} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(product => {
            setTitle(product.data.title);
            setPrice(product.data.price);
            setDescription(product.data.description);
        })
        .catch(err => console.log("error finding product"));
    }, [id]);

    const handleSubmit = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/"+id+"/edit",{
            title,
            price,
            description
        })
        .then(result => console.log("product updated successfully"));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title-input">Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} id="title-input"/>
                </div>
                <div>
                    <label htmlFor="price-input">Price</label>
                    <input type="number" onChange={e => setPrice(e.target.value)} value={price} id="price-input"/>
                </div>
                <div>
                    <label htmlFor="description-input">Desc</label>
                    <input type="text" onChange={e => setDescription(e.target.value)} value={description} id="description-input"/>
                </div>
                <div>
                    <input type="submit" value="Update"/>
                </div>
            </form>
        </div>
    )
}

export default ProductUpdate
