import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import Home from './components/Home';
import Register from "./components/Register";
import Login from "./components/Login";
import BoardList from './components/BoardList';
import './App.css';
import {AuthProvider} from "./AuthContext";
// import './styles.css'

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    {/*<header className="App-header">*/}
                    {/*    /!*<h4>Мой аналог Trello</h4>*!/*/}
                    {/*</header>*/}
                    <main>
                        <Routes>
                            {/*<Route path="/boards/:boardId" element={<Board />} />*/}
                            {/*<Route path="/" element={<p>Выберите доску</p>} />*/}
                            <Route path="/" element={<Home />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/boards" element={<BoardList />} />
                            <Route path="/boards/:boardId" element={<Board />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;