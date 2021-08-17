import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';

const Create = props => {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/player/new",{
            name : name,
            position : position
        })
        .then(result => navigate("/players/list"))
        .catch(err => console.log(err));
    }

    return (
        <form onSubmit ={handleSubmit}>
            <div>
                <h1>Add player</h1>
            </div>
            <div>
                <label htmlFor="name-input">Player Name: </label>
                <input type="text" onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="name-input">Player Position: </label>
                <input type="text" onChange={e => setPosition(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="ADD"/>
            </div>
        </form>
    )
}

export default Create
