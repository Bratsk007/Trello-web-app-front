import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import Home from './components/Home';
import Register from "./components/Register";
import Login from "./components/Login";
import './App.css';
// import './styles.css'

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Мой аналог Trello</h1>
                </header>
                <main>
                    <Routes>
                        {/*<Route path="/boards/:boardId" element={<Board />} />*/}
                        {/*<Route path="/" element={<p>Выберите доску</p>} />*/}
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;