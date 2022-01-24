import React from "react";
import { InputsContainer, LoginFormContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { login } from "../../services/user";
import {useHistory} from "react-router-dom"

export default function LoginForm({setRightButtonText}) {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()


    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, clear, history, setRightButtonText)
    }

    return (
        <LoginFormContainer>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
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
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"normal"}
                    >
                        Login
                    </Button>
                </form>
            </InputsContainer>
        </LoginFormContainer>
    )
}