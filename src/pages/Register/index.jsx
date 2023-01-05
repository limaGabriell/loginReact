import { Link } from 'react-router-dom';
import logoBigas from '../../assets/bigasBranco.png'
import { useState } from "react"
import { LayoutForm } from "../../components/LayoutForm"


export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    
    return (
        <LayoutForm>
            <form className="login-form">
            <span className="login-form-title">Criar Conta</span>

            <span className="login-form-title">
              <img src={logoBigas} alt="Logo do Bigas"/>
            </span>

            <div className="wrap-input">
              <input 
              className={name !== "" ? 'has-val input' : 'input'} 
              type="nome"
              value={name}
              onChange={e => setName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

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
              <button className="login-form-btn">Cadastrar</button>
            </div>

            <div className="text-account">
              <span className="txt1">Ja tenho conta</span>

              <Link className="txt2" to="/">
                Entrar
              </Link>
            </div>


          </form>
        </LayoutForm>
    )
}