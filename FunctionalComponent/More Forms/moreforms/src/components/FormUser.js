import React, {useState} from 'react'

const FormUser = () => {
    const[firstName,setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const[hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const[firstNameError, setFirstNameError] = useState("")
    const[lastNameError, setLastNameError] = useState("")
    const[emailError, setEmaillerror] = useState("")
    const[passwordError, setPasswordError] = useState("")
    const[confirmPasswordError, setConfirmPasswordError] = useState("")

    const createUser = (e)=>{
        e.preventDefault();
        setHasBeenSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length <2){
            setFirstNameError("First Name must be Required and at least 2 charecters")
        }else{
            setFirstNameError("")
        }
        }
        const handleLastName =(e)=>{
            setLastName(e.target.value);
            if (e.target.value.length<2){
                setLastNameError("Last Name must be Required and at least 2 charecters")
            }else{
                setLastNameError("")
            }
        }
        const handleEmail=(e)=>{
            setEmail (e.target.value);
            if(e.target.value.length<2){
                setEmaillerror("Email must be Required and at least 2 charecters")
            }else {
                setEmaillerror("");
            }

        }
        const handlePassword=(e)=>{
            setPassword(e.target.value);
            if(e.target.value.length<2){
                setPasswordError("Password must be Required and at least 8 charecters")
            }else{
                setPasswordError("")
            }
        }
        const handleConfirmPassword = (e)=>{
            setConfirmPassword(e.target.value);
            if(e.target.value.length<8){
                setConfirmPasswordError("Confirm Password must be Required and at least 8 charecters")
            }else if (e.target.value !== password){
                setConfirmPasswordError("Password and confirm password must be match !")
            }else{
                setConfirmPasswordError("")
            }
        }
    

    
    return (
        <>
        {
            hasBeenSubmitted ? 
            <h3>Thank You For Submitted</h3>:
            <h3>Please Submit the form !</h3>
        }
        
        <div>
            
            <form onSubmit={createUser}>
                <div>
                <label>First Name</label>
                <input type="text" onChange={handleFirstName} value={firstName} required/> 
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }  
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={handleLastName} value={lastName} required/>
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{lastNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={handleEmail} value={email} required/>
                    {
                        emailError?
                        <p style={{color:'red'}}>{emailError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={handlePassword} value={password} required/>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" onChange={handleConfirmPassword} value={confirmPassword} required/>
                    {
                        confirmPasswordError?
                        <p style={{color:'red'}}>{confirmPasswordError}</p>:
                        ''
                    }
                </div>
                <div>
                    <input type="submit" value="Create User"/>
                </div>

            </form>
            <h1>User Information</h1>
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>Confirm Password: {confirmPassword}</h3>

            
        </div>
        </>
    )
}

export default FormUser
