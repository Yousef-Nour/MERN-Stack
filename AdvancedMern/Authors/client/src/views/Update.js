import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Update = props => {

    const {id} = props;
    const [oldAuthor, setOldAuthor] = useState("");
    const [oldAuthorLoad, setOldAuthorLoad] = useState(false);
    const [updatedAuthor, setUpdatedAuthor] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [errors , setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/"+id)
        .then(result => {
            setOldAuthor(result.data.name);
            setOldAuthorLoad(true);
        })
        .catch(err => console.log("Can't retrieve the author", err));
    }, [id]);

    useEffect(() => {
        isLoaded && axios.put("http://localhost:8000/api/"+id, {name :updatedAuthor})
        .then(result => {
            navigate("/");
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const tempArr = [];
            for(const key of Object.keys(errorResponse)){
                tempArr.push(errorResponse[key].message)
            }
            setErrors(tempArr);
        });
    }, [isLoaded, updatedAuthor,id])
    return (
        <div>
            <div>
                <h1>Favorite Authors</h1>
                <p> <Link to="/">Home</Link> </p>
                <p>Edit this author</p>
            </div>
            <div>
                {
                    oldAuthorLoad && <Form oldAuthor={oldAuthor} newAuthor={setUpdatedAuthor} changeLoaded={setIsLoaded} errors={errors}/>
                }
            </div>
        </div>
    )
}

export default Update
