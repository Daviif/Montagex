import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("teste", username, password)
        console.log("Envio");

        alert("Enviando os dados:" + username + " - " + password);
    };

  return (
    <div className ="container">
        <form onSubmit={handleSubmit}></form>
    <div className="curved-shape"></div>
    <div className="form-box Login">
        <h2>LOGIN</h2>
        <form action="#">
            <div className="input-box">
                <input type="text" onChange={(e) => setUsername(e.target.value)} autoComplete='username' required />
                <label htmlFor="">Nome de Usuário</label>
                <FaUser className='icon'></FaUser>
            </div>
            <div className="input-box">
                <input type="password" onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' required />
                <label htmlFor="">Senha</label>
                <FaLock className="icon"></FaLock>
            </div>
            <div className="input-box">
                <button className="btn" type='submit'>Entrar</button>
            </div>
            <div className="regi-link">
                <p>Esqueceu sua senha? <a href="#" className='ForgotLink'>Clique aqui</a></p>
            </div>
            <div className="signup-Link">
                <p>Primeiro acesso? <a href="#" className='Signup-link'>Registre-se</a></p>
            </div>
        </form>
        </div>
    <div className="info-content Login">
        <h2>Bem-Vindo de Volta</h2>
        <p>Vamos aos lançamentos de hoje? Preparado?! Vamos lá...</p>
    </div>
    </div>
  )
}

export default Login
