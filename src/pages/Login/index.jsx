import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoBigas from '../../assets/bigasBranco.png'
import { LayoutForm } from '../../components/LayoutForm';
import { Register } from '../Register';

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <LayoutForm>
   
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>

            <span className="login-form-title">
              <img src={logoBigas} alt="Logo do Bigas"/>
            </span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? 'has-val input' : 'input'} 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? 'has-val input' : 'input'} 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>

            <div className="text-account">
              <span className="txt1">Não possui conta?</span>

              <Link className="txt2" to="/register">
                Criar Conta
                </Link>
            </div>


          </form>
          </LayoutForm>
    );
}