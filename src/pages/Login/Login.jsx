import { useEffect, useState } from 'react'
import './main.sass'
import {FaUser, FaLock} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';     


function Login() {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [loading, setLoading] = useState(true)
  const [atualizar, setAtualizar] = useState(true)


  const data = {
    login: login,
    password: senha
  }

  const navigate = useNavigate()

  const handlerSubmit = (e) => {
    e.preventDefault();
    
  }

  setTimeout(() => {
    setAtualizar(!atualizar)
  }, 5000)


  useEffect(() => {
    }, [atualizar])


  return (
    <aside id='login'>
        <form>
            <h1>DROGARIA MENK</h1>
            <div id='campo-credenciais'>

              <div className='campo'>
                <input type='text' placeholder='Login' onChange={(e) => setLogin(e.target.value)}/>
                <FaUser className='icon'/>
              </div>
              
              <div className='campo'>
                <input type='password' placeholder='Senha' onChange={(e) => setSenha(e.target.value)}/>
                <FaLock className='icon'/>
              </div>

              <div className='lembra'>
                <label>
                  <input type='checkbox'/>
                  Lembrar de mim
                </label>
                <a href='#'>Esqueci a senha</a>
              </div>

              <button className='botao' onClick={(e) => handlerSubmit(e)}>Entrar</button>


            </div>

        </form>

    </aside>

  )
}

export default Login