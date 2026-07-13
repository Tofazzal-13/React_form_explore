import useHooks from "../../hooks/useHook2";
import useInputField from "../../hooks/useInputField";


const HookForm = () => {
    const [name, nameOnChange] = useInputField("");
    const [email, emailOnChange] = useInputField("");
    const [password, passwordOnChange] = useHooks("");
    const handleSubmit = e => {
        e.preventDefault();
        console.log("submit", name, email, password);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange}/>
                <br />
                <input type="email" name="email" onChange={emailOnChange}/>
                <br />
                <input type="password" onChange={passwordOnChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;