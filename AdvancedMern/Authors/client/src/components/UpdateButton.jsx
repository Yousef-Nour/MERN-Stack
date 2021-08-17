import React from 'react';
import { navigate } from '@reach/router';

const UpdateButton = props => {

    const {author} = props;

    const handleUpdateClick = e => {
        e.preventDefault();
        navigate("/edit/"+author._id)
    }
    return (
        <button onClick={handleUpdateClick}>
            Edit
        </button>
    )
}

export default UpdateButton
