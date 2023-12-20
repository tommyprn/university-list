import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

import './login.css';

const Login=()=> {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if(username&&password!==''){
            localStorage.setItem('user',username);
            navigate("/");
        }else{
            alert('username atau password belum diisi, mohon periksa kembali.')
        }
      };
    
  return (
    <div className="container">
          <form className='form'>
          <h2>Login Page</h2>
            <label>
              <input
                type="text"
                className='input'
                value={username}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <input
                type="password"
                className='input'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="button" className='submit' onClick={handleLogin}>
              Login
            </button>
          </form>
    </div>
  );
}

export default Login;
