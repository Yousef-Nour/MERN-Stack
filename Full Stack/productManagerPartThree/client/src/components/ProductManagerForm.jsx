import React, {useState} from 'react';
import axios from 'axios';

const rowStyle = {
    display: "flex",
    padding : "5px",
    paddingLeft : "450px",
}
const inputStyle = {
    marginLeft : "5px",
}

const ProductManagerForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(500);
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new",{
            title,
            price,
            description
        })
        .then(result => {
            props.ANP(result.data);
        })
        .catch(err => console.log("error posting the data"));

        setTitle("");
        setPrice(500);
        setDescription("");
    }

    return (
        <div>
            <div>
                <h3>Product Manager</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={rowStyle}>
                    <div>
                        <label htmlFor="title-input">Title</label>
                    </div>
                    <div style={inputStyle}>
                        <input type="text" id="title-input" onChange={e => setTitle(e.target.value)} value={title}/>
                    </div>
                </div>
                <div style={rowStyle}>
                    <div>
                        <label htmlFor="price-input">Price</label>
                    </div>
                    <div style={inputStyle}>
                        <input type="number" id="price-input" onChange={e => setPrice(e.target.value)} value={price} min="1"/>
                    </div>
                </div>
                <div style={rowStyle}>
                    <div>
                        <label htmlFor="description-input">Desc</label>
                    </div>
                    <div style={inputStyle}>
                        <input type="text" id="description-input" onChange={e => setDescription(e.target.value)} value={description}/>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Create"/>
                </div>
            </form>
        </div>
    )
}

export default ProductManagerForm
