import React,{useState} from 'react'

const CreateBox = (props) => {
    const[color, setColor] = useState("")
    
    const handleBox=(e)=>{
        e.preventDefault();

        props.addBox(color);
        setColor("");
    }
    return (
        <div>
            <form onSubmit={handleBox}>
                <label>Color</label>
                <input type="text" value={color} onChange={(e)=>setColor(e.target.value)}/>
                <input type="submit" value="ADD"/>
            </form>
        </div>
    )
}

export default CreateBox
