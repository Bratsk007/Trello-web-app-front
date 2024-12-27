import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBoards } from '../api/api';
import { AuthContext } from '../AuthContext'; // Импортируем контекст

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const {userId} = useContext(AuthContext);
    const navigate = useNavigate();
    const { setBoardId } = useContext(AuthContext);

    useEffect(() => {
        const fetchBoards = async () => {
            if (userId) {
                const data = await getBoards(userId);
                setBoards(data);
                console.log(data);
                console.log("Got BoardList!")
            } else {
                console.log("user ID is unknown")
            }
        };
        fetchBoards();
    }, [userId]); // Зависимость от userId

    // Обработчик клика по кнопке доски
    const handleBoardClick = (boardId) => {
        setBoardId(boardId); // сохранение ID доски
        navigate(`/boards/${boardId}`); // Переход на страницу доски с boardId
        console.log("Going to board with ID: " + boardId);
    };

    return (
        <div>
            <h1>Доски</h1>
            {boards.length > 0 ? (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {boards.map((board) => (
                        <li key={board.id} style={{ marginBottom: '10px' }}>
                            <button
                                onClick={() => handleBoardClick(board.id)} // Обработчик клика
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    textAlign: 'left',
                                    backgroundColor: '#f0f0f0',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                <h2>{board.title}</h2>
                                <p>{board.description}</p>
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Досок пока нет</p>
            )}
        </div>
    );
};

export default BoardList;