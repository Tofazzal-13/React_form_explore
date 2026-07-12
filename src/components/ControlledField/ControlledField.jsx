import { useState } from "react";


const ControlledField = () => {
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("");
        
    }

    const handlePasswordOnChange = (e) =>  {
          console.log(e.target.value);
          setPassword(e.target.value);
          if(password.length < 6){
            setError("password must be 6 char")
          }
          else{
            setError("")
          }
    }

    return (
        <div onSubmit={handleSubmit}>
            <form>
                <input type="email" name="email"  placeholder="Email" required /> 
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange}  defaultValue={password}  placeholder="Password"  required/> 
                <br />
                <input type="submit" value="Submit"/> 
                
            </form>
            <p style={{color:"red"}}>
                <small>{error}</small>
            </p>
        </div>
    );
};
 
export default ControlledField;