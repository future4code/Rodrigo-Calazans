import axios from "axios";
import React from "react";
import styled from "styled-components";


const CardUsuario = styled.div`
    display: flex;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    justify-content: space-between;
`

export default class TelaListaUsuario extends React.Component{
    state= {
        usuarios: []
    }


    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "rodrigo-calazans-carver"
            }
        })
        .then((res) => {
            this.setState({ usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente de novo")
        })
    }

    deletaUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "rodrigo-calazans-carver"
            }
        })
        .then((res) => {
            alert("Usuario deletado com sucesso");
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("Ocorreu um erro")
        })
    }


    render(){
        console.log(this.state.usuarios);
        const listaUsuario = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletaUsuario(user.id)}>X</button>
                </CardUsuario>
            )
        })

        return (
            <div>               
                <button onClick={this.props.changeCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuarios</h2>
                {listaUsuario}
            </div>
        )
    }
}