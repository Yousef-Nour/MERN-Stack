import axios from 'axios';
import React from 'react'

const DeleteButton = props => {

    const {playerId, DFD} = props;

    const deleteHandler = e => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/"+playerId+"/delete")
        .then(result => DFD(playerId))
        .catch(err => console.log(err));  
    }
    
    return (
        <button onClick={deleteHandler}>
            Delete
        </button>
    )
}

export default DeleteButton
