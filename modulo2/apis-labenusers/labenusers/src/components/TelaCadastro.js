import axios from "axios";
import React from "react";

export default class TelaCadastro extends React.Component{
    state= {
        nome: "",
        email: ""
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value})
    }

    addCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url,body, {
            headers: {
                Authorization: "rodrigo-calazans-carver"
            }
        })
        .then((res) => {
            alert("Usuario cadastrado com sucesso!")
            this.setState({ nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message);
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.props.changeLista}>Ir para Lista de Usuarios</button>
                <h2>Cadastro</h2>
                <input 
                    placeholder={"Nome"} 
                    onChange={this.onChangeNome}
                    value={this.state.nome}
                />
                <input 
                    placeholder={"Email"}
                    onChange={this.onChangeEmail}
                    value={this.state.email}
                />
                <button onClick={this.addCadastro}>Cadastrar</button>
            </div>
        )
    }
}