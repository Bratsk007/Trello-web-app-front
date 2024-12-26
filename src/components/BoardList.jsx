import React, { useEffect, useState } from 'react';
import { getBoards } from '../api/api';

const BoardList = () => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        const fetchBoards = async () => {
            const data = await getBoards();
            setBoards(data);
        };
        fetchBoards();
    }, []);

    return (
        <div>
            <h1>Доски</h1>
            {boards.length > 0 ? (
                <ul>
                    {boards.map((board) => (
                        <li key={board.id}>
                            <h2>{board.title}</h2>
                            <p>{board.description}</p>
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