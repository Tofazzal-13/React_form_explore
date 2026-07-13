import { useState } from "react"

const useHooks = (defaultValue) => {
    const [useField, setUseField] = useState(defaultValue);

    const handleOnChange = e => {
        setUseField(e.target.value);
    }

    return [useField, handleOnChange]

}

export default useHooks;