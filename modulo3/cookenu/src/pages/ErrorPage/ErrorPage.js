import { Typography } from "@material-ui/core";
import React from "react";
import { ErrorImage, ErrorPageContainer } from "./Styled";
import error from '../../assets/error.png'

export default function ErrorPage() {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error} />
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
        </ErrorPageContainer>
    )
}