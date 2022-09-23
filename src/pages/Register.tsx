import React from "react";
import add from '../image/addAvatar.png'

const Register = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> Chat do Renan</span>
                <span className="title"> Registrar </span>
                <form>
                    <input type='text' placeholder="Nome..." />
                    <input type='email' placeholder="Email.." />
                    <input type='password' placeholder="Senha..." />
                    <input style={{display: "none"}} type='file' id="file"/>
                    <label htmlFor="file">
                        <img src={add} alt="Adicionar" />
                        <span>Adicionar Avatar</span>
                    </label>
                    <button> Registrar </button>
                </form>
                <p> Você já possui uma conta ? Logar</p>
            </div>
        </div>
    )
}

export default Register;