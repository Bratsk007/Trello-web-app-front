import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Trello Clone</h1>
            <button onClick={() => navigate('/register')} style={{ display: 'block', margin: '10px auto' }}>
                Регистрация
            </button>
            <button onClick={() => navigate('/login')} style={{ display: 'block', margin: '10px auto' }}>
                Войти
            </button>
        </div>
    );
};

export default Home;