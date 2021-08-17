import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';

const Main = props => {

    const mainStyle = {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
    }

    const [authors, setAuthors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(result => {
            setAuthors(result.data);
            setIsLoaded(true);
        })
        .catch(err => console.log("Can't retrieve authors from database", err));
    },[]);

    const deleteFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    };

    return (
        <div style={mainStyle}>
            <div>
                <h1>Favorite Authors</h1>
                <p><Link to="/new">Add an author</Link></p>
                <p>We have quotes by:</p>
            </div>
             <div>
                <table>
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Actions availabe</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoaded && authors.map((author, key) => {
                                return <tr key={key}>
                                    <td>{author.name}</td>
                                    <td> <UpdateButton author={author}/> <DeleteButton authorId={author._id} DFD={deleteFromDom}/> </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
             </div>
        </div>
    )
}

export default Main
