import React, {useState} from 'react'

const ToDoList = (props) => {

    const [isFinished, setIsFinished] = useState(false);
    const taskStyle = {
        textDecorationLine : "line-through",
        color : "blue"
    }


    const handleDelete = e => {
        props.tasks(props.arr.filter(
            task => task !== props.toDo
        ))
    }


    return (
        <div>
            {
                isFinished ? 
                <p style={taskStyle}>{props.toDo} <input type="checkbox" checked={isFinished} onChange={e => setIsFinished(e.target.checked)}/> <button onClick={handleDelete}>Delete</button> </p> :
                <p>{props.toDo} <input type="checkbox" checked={isFinished} onChange={e => setIsFinished(e.target.checked)}/> </p>
            }
        </div>
    )
}

export default ToDoList
