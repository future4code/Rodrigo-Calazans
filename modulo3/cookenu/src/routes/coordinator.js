export const goToLogin = (history) => {
    history.pushState("/login")
}

export const goToSingUp = (history) => {
    history.pushState("/cadastro")
}

export const goToAddRecipes = (history) => {
    history.pushState("/adicionar-receita")
}

export const goToRecipeDetailPage = (history) => {
    history.pushState("//detalhe/:id")
}

export const goToRecipesListPage = (history) => {
    history.pushState("/")
}