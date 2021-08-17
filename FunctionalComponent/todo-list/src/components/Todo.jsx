import React, {useState} from 'react'

const Todo = (props) => {

    const [toDo, setToDo] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.tasks(toDo);
        setToDo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="taskInput">Tasks?</label>
                </div>
                <div>
                    <input type="text" id="taskInput" onChange={e => setToDo(e.target.value)} placeholder="new Task" value={toDo}/>
                </div>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default Todo
