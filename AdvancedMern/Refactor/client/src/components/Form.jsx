import React, {useState} from 'react';

const Form = props => {

    const rowStyle = {
        display: "flex",
        padding : "5px",
        paddingLeft : "450px",
    }

    const inputStyle = {
        marginLeft : "5px",
    }

    const {initialTitle, initialPrice, initialDescription, ANP} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = e => {
        e.preventDefault();
        ANP({title, price, description});
        setTitle("");
        setPrice(0);
        setDescription("");
    }

    React.useEffect(() => {
        setTitle(props.initialTitle)
    },[props.initialTitle, props.initialPrice, props.initialDescription])

    return (
        <div>
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
                    {
                        initialTitle.length > 0 ? 
                            <input type="submit" value="Update"/>
                        :
                            <input type="submit" value="Create"/>
                    }
                </div>
            </form>
        </div>
    )
}

export default Form
