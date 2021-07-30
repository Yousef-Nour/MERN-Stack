import React, {useState}from 'react';
import {Link} from '@reach/router';

const Form = (props) => {
    const[id, setID] = useState(0);
    const[resource, setResource] = useState("people");

    return (
        <>
            <h1>Search for:</h1>
            <label for="types">Resource</label>
            <select id="types" value={resource} onChange={(e) => setResource(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select> 

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setID(e.target.value)}/>
            <Link to={`/${id}/${resource}`} ><button>Search</button></Link>
            

        </>
    )
}

export default Form