// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import './styles.css'; // Подключение стилей
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import App from './App'; // Импортируем компонент App
import reportWebVitals from './reportWebVitals';

// Находим корневой элемент
const container = document.getElementById('root');

// Создаем корневой элемент с помощью createRoot
const root = createRoot(container);

// Рендерим приложение
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
