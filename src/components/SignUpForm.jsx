import { useState } from "react";
import App from "../App";
const API='https://fsa-jwt-practice.herokuapp.com/signup'

const SignUpForm = ({setToken}) => {
    const [username,setusername]=useState("");
    const [password, setpassword] =useState("");
    const [error,setError]=useState(null);
    
    async function handleSubmit(event){
        event.preventDefault()
        try {
            const response = await fetch(API,{
                method: "POST",
                body: JSON.stringify({username,password})
            })
            const result= await response.json()
            setToken(result.token);
            console.log(result)
        } catch(error) {
            setError(error.message)
        }
    }

    return(
        <>  
        <h2>Sign Up</h2>

        {error &&<p>{error} </p>}

        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} 
                onChange={(e)=>{setusername(e.target.value)}}/>
            </label>
            <label>
                Password:<input value={password}
                onChange={(e)=>{setpassword(e.target.value)}}/>
            </label>
            <button>Submit</button>
        </form>
        </>
    );
};
 
export default SignUpForm;