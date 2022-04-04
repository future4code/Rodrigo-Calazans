import { useHistory } from "react-router-dom"
import { StyledPageError } from "./style"


export const PageError = () => {
    const history = useHistory()

    return(
        <StyledPageError>
            <h1>Error404</h1>
            <h2>Algo deu errado.</h2>
            <h3> Para corrigir clique aqui abaixo.</h3>
            <button onClick={() => history.push('/')}>VOLTAR</button>
        </StyledPageError>
    )
}