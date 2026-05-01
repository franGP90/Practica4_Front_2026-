'use client'

import Link from 'next/link';
import './style.css';
import { useAuth } from '@/context/authContext';
import { useState } from 'react';

const Register = () => {
    const { register, login } = useAuth();
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [alterner, setAlterner] = useState<boolean>(false);

    return (
        <div>
          { alterner && 
          <div>
          <form className='register-form'>
                <label>Nombre de usuario:</label>
                <input id='username' className='form-inputs' value={username} type="text" onChange={(e) => {
                    setUsername(e.target.value);
                }}></input>
                <label>Email:</label>
                <input id='emailRegister' className='form-inputs' value={email}  type="text" onChange={(e) => {
                    setEmail(e.target.value);
                }}></input>
                <label>Contraseña:</label>
                <input id='passwordRegister' className='form-inputs' value={password} type="text" onChange={(e) => {
                    setPassword(e.target.value);
                }}></input>
            </form>
            <button className='send-button' type='submit' onClick={()=> register(username, email, password)}>Enviar</button>
            </div>
            }
            {
            !alterner &&  
            <div>
            <form className='register-form'>
                <label>Email:</label>
                <input id='emailLogin' className='form-inputs' value={email} type="text"onChange={(e) => {
                    setEmail(e.target.value);
                }}></input>                
                <label>Contraseña:</label>
                <input id='passwordLogin' className='form-inputs' value={password} type="text" onChange={(e) => {
                    setPassword(e.target.value);
                }}></input>

            </form>
             <button className='send-button' type='submit' onClick={() => login(email, password)}>Enviar</button>
             </div>
            }
            <button className='to-login-link' onClick={() => setAlterner(!alterner)}>{alterner ? '-->Ya tienes cuenta? Inicia Sesión<--' : '-->No tienes cuenta? Regístrate aquí<--'}</button>
        </div>
    );
}

export default Register;


