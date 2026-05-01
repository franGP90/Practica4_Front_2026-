'use client'
import { useAuth } from '@/context/authContext';
import './style.css'

const CommonHeader = () => {
        const { logout } = useAuth();
    return (
        <div className='header'>
            <h2>Nebrija Social</h2>
            <button className='profile-button'>
                <span className='profile-button-text'>
                   Mi perfil 
                </span>
            </button>
            <button className='logout-button' onClick={() => logout()}>
                Cerrar sesión
            </button>
        </div>
    );
}

export default CommonHeader;