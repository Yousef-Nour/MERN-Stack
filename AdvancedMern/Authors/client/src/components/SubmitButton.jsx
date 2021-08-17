import React from 'react'

const SubmitButton = props => {

    const {authorName, newAuthor, changeLoaded} = props;

    const handleSubmit = e => {
        e.preventDefault();
        newAuthor(authorName);
        changeLoaded(true);
    }

    return (
        <button onClick={handleSubmit}>
            Submit
        </button>
    )
}

export default SubmitButton
