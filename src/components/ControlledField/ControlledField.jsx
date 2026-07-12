import { useState } from "react";


const ControlledField = () => {
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("");
        
    }

    const handlePasswordOnChange = (e) =>  {
          console.log(e.target.value);
          
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
        </div>
    );
};
 
export default ControlledField;