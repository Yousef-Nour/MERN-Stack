import { Link, navigate } from '@reach/router';
import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import axios from 'axios';

const Create = props => {

    const [updatedAuthor, setUpdatedAuthor] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        isLoaded && axios.post("http://localhost:8000/api/new", {name : updatedAuthor})
        .then(result => navigate("/"))
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const tempArr = [];
            for(const key of Object.keys(errorResponse)){
                tempArr.push(errorResponse[key].message)
            }
            setErrors(tempArr);
        });
    },[isLoaded, updatedAuthor])


    return (
        <div>
            <div>
                <h1>Favorite Author</h1>
                <p> <Link to="/">Home</Link> </p>
                <p>Add a new author</p>
            </div>
            <div>
                <Form oldAuthor="" newAuthor={setUpdatedAuthor} changeLoaded={setIsLoaded} errors={errors}/>
            </div>
        </div>
    )
}

export default Create
