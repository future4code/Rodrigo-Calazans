import { useState } from "react";

const useForm = (inicialState) => {
    const [form,setForm] = useState(inicialState)

    const handleInputChange = (e) => {
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(inicialState)
    }

    return [form, handleInputChange, clear]
}

export default useForm