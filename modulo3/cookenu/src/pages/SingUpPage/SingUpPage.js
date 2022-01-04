import React from "react";
import { LogoImage, ScreenContainer } from "./styled";
import logo from "../../assets/logo.png"
import SingUpForm from "./SingUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function SingUpPage({setRightButtonText}) {
    useUnprotectedPage()
    return (   
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SingUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}