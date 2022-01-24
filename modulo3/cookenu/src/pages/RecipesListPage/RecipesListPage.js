import React from "react"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useProtectedPage from '../../hooks/useProtectedPage'
import { RecipeListContainer, AddRecipeButton } from './styled'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { Add } from "@material-ui/icons"
import { useHistory } from "react-router-dom"
import { goToAddRecipes } from "../../routes/coordinator"


export default function RecipesListPage() {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    
    const onClickCard = () => {

    }

    const recipeCards = recipes.map((recipe)=> {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={onClickCard}
            />
        )
    })

    return (
        <RecipeListContainer>
           {recipeCards}
           <AddRecipeButton 
            color="primary"
            onClick={()=> goToAddRecipes(history)}
           >
               <Add/>
           </AddRecipeButton>
        </RecipeListContainer>
    )
}