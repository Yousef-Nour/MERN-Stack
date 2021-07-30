import React, {useState} from 'react'


const FormUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword}
        alert(`Welcome ${newUser.firstName}`)
        setHasBeenSubmitted(true);
    }
    
    const formMassage = () =>{
        if(hasBeenSubmitted){
            return("Thank you for submitting !")
        }else{
            return ("Please Submit the Form !!")
        }
    }
    return ( 
        <div>
            <>
            <form onSubmit={createUser}>
                <div>
                    <h3>
                        {formMassage()}
                    </h3>
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <h1>Your Form Data</h1>
            <h3>FirstName: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>Password: {confirmPassword}</h3>
            </>
        </div>
    )
}

export default FormUser
