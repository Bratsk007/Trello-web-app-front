import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Авторизация</h1>
            <input type="text" placeholder="Логин" style={{ display: 'block', margin: '10px auto' }} />
            <input type="password" placeholder="Пароль" style={{ display: 'block', margin: '10px auto' }} />
            <button onClick={() => navigate('/')} style={{ display: 'block', margin: '10px auto' }}>
                Вход
            </button>
        </div>
    );
};

export default Login;