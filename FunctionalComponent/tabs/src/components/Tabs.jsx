import React, {useState} from 'react'

const Tabs = (props) => {
    const mainStyle= {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        marginTop : "50px",
    }
    const tabStyle = {
        display:"flex",
    }
    const contentStyle = {
        marginTop : "10px",
    }

    const buttonStyle = {
        backgroundColor : "black",
        color : "white",
    }

    const [content, setContent] = useState("");

    const [isClicked, setIsClicked] = useState("");

    const handleClick = (e, value) =>{
        setContent(value.content);
        setIsClicked(value.tab);
    }

    
    return (
        <div style={mainStyle}>
            <div style={tabStyle}>
                {
                    props.items.map(
                        (value, key) => 
                            value.tab === isClicked ? <button onClick={(e) => handleClick(e, value)} style={buttonStyle}>{value.tab}</button>
                            : <button onClick={(e) => handleClick(e, value)} >{value.tab}</button>
                        
                    )
                }
            </div>
            <div style={contentStyle}>
                <textarea
                rows="5"
                cols="50"
                value={content}
                readOnly
                />
            </div>
        </div>
    )
}

export default Tabs
