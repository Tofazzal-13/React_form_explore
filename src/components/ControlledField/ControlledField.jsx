import { useState } from "react";


const ControlledField = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()  
        console.log(name, email, password);
        if(password.length > 6){
            setError("6 character or longer password needed")
        }
        else{
            setError(" ")
        }
        
    }

    const handleEmailOnChange =  (e) =>  {
        setEmail(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handlePasswordOnChange = (e) =>  {
          console.log(e.target.value);
          setPassword(e.target.value);
          if(password.length < 6){
            setError("password must be 6 char")
          }
          else{
            setError(" ")
          }
    }

    return (
        <div onSubmit={handleSubmit}>
            <form>
                <input type="text" placeholder="Enter Your Name"  defaultValue={name} onChange={handleNameChange}/>
                <br />
                <input type="email" name="email"  placeholder="Email" required onChange={handleEmailOnChange} defaultValue={email}/> 
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