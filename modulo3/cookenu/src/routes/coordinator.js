export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSingUp = (history) => {
    history.push("/cadastro")
}

export const goToAddRecipes = (history) => {
    history.push("/adicionar-receita")
}

export const goToRecipeDetail = (history) => {
    history.push("//detalhe/:id")
}

export const goToRecipesList = (history) => {
    history.push("/")
}