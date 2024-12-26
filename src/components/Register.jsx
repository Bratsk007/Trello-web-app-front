import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Здесь можно добавить логику обработки регистрации
        navigate('/'); // Переход на главную страницу после завершения
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Регистрация</h1>
            <input type="text" placeholder="Логин" style={{ display: 'block', margin: '10px auto' }} />
            <input type="password" placeholder="Пароль" style={{ display: 'block', margin: '10px auto' }} />
            <button onClick={handleSubmit} style={{display: 'block', margin: '10px auto'}}>
                Готово
            </button>
        </div>
    );
};

export default Register;