import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled';
import Button from '@material-ui/core/Button';
import { goToRecipesList, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';






export default function Header({rightButtonText, setRightButtonText}) {
  const token = localStorage.getItem("token")
  const history = useHistory()
  
  const logout = () =>{
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token){
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }

  return (

    <AppBar position="static">
      <StyledToolbar>       
        <Button color="inherit" onClick={()=> goToRecipesList(history)}>Cookenu</Button>
        <Button color="inherit" onClick={rightButtonAction}>{rightButtonText}</Button>
      </StyledToolbar>
    </AppBar>

  );
}
