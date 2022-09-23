import React from "react";
import add from '../image/addAvatar.png'

const Login = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> Chat do Renan</span>
                <span className="title"> Registrar </span>
                <form>
                    <input type='email' placeholder="Email.." />
                    <input type='password' placeholder="Senha..." />
                    <button> Logar </button>
                </form>
                <p> Você não possui uma conta ? Registre-se</p>
            </div>
        </div>
    )
}

export default Login;