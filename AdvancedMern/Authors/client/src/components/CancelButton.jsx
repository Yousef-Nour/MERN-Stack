import React from 'react';
import { navigate } from '@reach/router';

const CancelButton = () => {
    return (
        <button onClick={e => navigate("/")}>
            Cancel
        </button>
    )
}

export default CancelButton
