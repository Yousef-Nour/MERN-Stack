import React, { useState } from  'react';
    
// let newUser = {}; // if you want to use a variable inside the function >> define it out side as global
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password,confirmPassword };
        console.log("Welcome", newUser);

    };
    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        if (e.target.value.length<2){
            setFirstNameError("Length should be at-least two")
        }else{
            setFirstNameError("")
        }
        

            
        
    }
    
    
    
    return(
        <>
        <form onSubmit={ createUser }>

            <div>
                <label>firstName: </label> 
                <input type="text" onChange={ handleFirstName } />
                {
                    firstNameError ? <p>{firstNameError}</p>: null
                }
            </div>
            <div>
                <label>lastName: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h1>Your Form Data</h1>
        <h5>First Name:{firstName}</h5>
        <h5>Last Name: {lastName}</h5>
        <h5>Email:{email}</h5>
        <h5>Password:password</h5>
        <h5>confirmPassword:password</h5>
        </>
    );
};
    
export default UserForm;