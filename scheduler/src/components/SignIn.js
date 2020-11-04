import React, {useState} from 'react'
import firebase from '../config/fbConfig';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) =>{
        if(e.target.id==="email")
            setEmail(e.target.value);
        else
            setPassword(e.target.value);
    }

    async function handleSubmit() {
        // e.preventDefault();
        // console.log(email);
        // console.log(password);
        try{
            await firebase.login(email, password)
        } catch(error){
            alert(error.message);
        }
    }
       

    return (
        <div className = "container">
            <form onSubmit = {handleSubmit} className = "white">
                <h5 className = "grey-text text-darken-3">Sign In</h5>
                <div className = "input-field">
                    <label htmlfor="email">Email</label>
                    <input type="email" id="email" onChange = {handleChange} />
                </div>
                <div className = "input-field">
                    <label htmlfor="password">Password</label>
                    <input type="password" id="password" onChange = {handleChange} />
                </div>
                <div className= "input-field">
                    <button className="btn pink lighten-1 z-depth-0" onClick = {handleSubmit}>Login</button>
                </div>
            </form>            
        </div>
    )
}

export default SignIn
