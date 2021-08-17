import React, {useState} from 'react';
import CancelButton from './CancelButton';
import SubmitButton from './SubmitButton';

const Form = props => {

    const divStyle = {
        div : {
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            padding : "10px",
        },
        input : {
            width: "100px",
        }
    }

    const {oldAuthor, newAuthor, changeLoaded, errors} = props;
    const [authorName, setAuthorName] = useState(oldAuthor);


    return (
        <>
            <div style={divStyle.div}>
                <label htmlFor="name-input">Name</label>
                <input type="text" onChange={e => setAuthorName(e.target.value)} value={authorName} style={divStyle.input}/>
                {
                    errors.map((value, key) => 
                        <p key={key}>{value}</p>
                    )
                }
            </div>
            <div>
                <CancelButton/>
                <SubmitButton authorName={authorName} newAuthor={newAuthor} changeLoaded={changeLoaded} />
            </div>
        </>
    )
}

export default Form
