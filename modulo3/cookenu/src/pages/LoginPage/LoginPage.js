import React from "react";
import {LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png"
import { Button} from "@material-ui/core";
import LoginForm from "./LoginForm";
import { goToSingUp } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

export default function LoginPage({setRightButtonText}) {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button
                    onClick={()=> goToSingUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin={"normal"}
                >
                    Cadastro
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}