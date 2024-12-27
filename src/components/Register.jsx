import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {register} from "../api/api";
import { AuthContext } from '../AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserId } = useContext(AuthContext); // Получаем setUserId из контекста

    const handleSubmit = async (e) => {
        // Здесь можно добавить логику обработки регистрации
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        console.log("Форма регистрации отправлена");
        // navigate('/login'); // Переход на главную страницу после завершения

        const userData = {
            username: username,
            email: email,
            password: password,
        };

        console.log(userData);

        try {
            const response = await register(userData); // Используем функцию register

            if (response.userId) {
                // Успешная регистрация
                setUserId(response.userId);
                console.log("kaif, " + response.message); // Показываем уведомление об успехе
                // const boards = await getBoards(response.userId);
                navigate('/boards') // Переход на страницу со всеми досками
            } else {
                // Ошибка регистрации (например, пользователь уже существует)
                console.log("ne kaif, " + response.message); // Показываем уведомление об ошибке
                navigate('/'); // Переход на главную страницу
            }
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            console.log('Произошла ошибка при регистрации'); // Общее уведомление об ошибке
            navigate('/');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{display: 'block', margin: '10px auto'}}
                    required
                />
                <input
                    type="text"
                    placeholder="Логин (email)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: 'block', margin: '10px auto' }}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: 'block', margin: '10px auto' }}
                    required
                />
                <button type="submit" style={{ display: 'block', margin: '10px auto' }}>
                    Готово
                </button>
            </form>
        </div>
    );
};

export default Register;
