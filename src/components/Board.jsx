import React, { useEffect, useState } from 'react';
import { getBoardById, deleteListById, createList } from '../api/api';
import List from './List';

const Board = ({ boardId }) => {
    const [board, setBoard] = useState(null);
    const [newListTitle, setNewListTitle] = useState('');

    useEffect(() => {
        const fetchBoard = async () => {
            const data = await getBoardById(boardId);
            setBoard(data);
        };
        fetchBoard();
    }, [boardId]);

    const handleAddList = async () => {
        if (newListTitle.trim()) {
            const listData = { title: newListTitle };
            const newList = await createList(boardId, listData);
            setBoard((prevBoard) => ({
                ...prevBoard,
                lists: [...prevBoard.lists, newList],
            }));
            setNewListTitle('');
        }
    };

    const handleDeleteList = async (listId) => {
        await deleteListById(listId);
        setBoard((prevBoard) => ({
            ...prevBoard,
            lists: prevBoard.lists.filter((list) => list.id !== listId),
        }));
    };

    const handleAddCard = (listId, newCard) => {
        setBoard((prevBoard) => ({
            ...prevBoard,
            lists: prevBoard.lists.map((list) =>
                list.id === listId
                    ? { ...list, cards: [...list.cards, newCard] }
                    : list
            ),
        }));
    };

    if (!board) {
        return <p>Загрузка...</p>;
    }

    return (
        <div className="board">
            <h1>{board.title}</h1>
            <p>{board.description}</p>
            <div className="add-list">
                <input
                    type="text"
                    value={newListTitle}
                    onChange={(e) => setNewListTitle(e.target.value)}
                    placeholder="Название списка"
                />
                <button onClick={handleAddList}>Добавить список</button>
            </div>
            <div className="lists">
                {board.lists.map((list) => (
                    <List
                        key={list.id}
                        list={list}
                        onDeleteList={handleDeleteList}
                        onAddCard={handleAddCard}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;