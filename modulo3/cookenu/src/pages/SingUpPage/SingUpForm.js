import React from "react";
import { InputsContainer, SignUpFormContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router-dom"
import { signUp } from "../../services/user"

export default function SingUpForm({setRightButtonText}) {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })


    const onSubmitForm = (e) => {
        e.preventDefault()
        signUp(form, clear, history, setRightButtonText)
    }

    return (

        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        autoFocus
                    />
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                </InputsContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Fazer Cadastro
                </Button>
            </SignUpFormContainer>
        </form>


    )
}