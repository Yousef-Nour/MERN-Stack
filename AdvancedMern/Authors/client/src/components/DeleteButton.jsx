import axios from 'axios';
import React from 'react'

const DeleteButton = props => {

    const {authorId, DFD} = props;

    const handleDelete = e => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/"+authorId)
        .then(result => DFD(authorId))
        .catch(err => console.log("Can't delete this author"));
    }

    return (
        <button onClick={handleDelete}>
            Delete
        </button>
    )
}

export default DeleteButton
