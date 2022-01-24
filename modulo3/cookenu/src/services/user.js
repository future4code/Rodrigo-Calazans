import axios from "axios";
import {BASE_URL} from "../constants/urls"
import { goToRecipesList } from "../routes/coordinator";



export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            console.log(err)
            alert(err.response.data.message)
        })
}

