import React, { useContext, useEffect, useState } from 'react';
import { getBoardById, deleteListById, createList } from '../api/api';
import List from './List';
import { AuthContext } from '../AuthContext';

const Board = () => {
    const { boardId } = useContext(AuthContext);
    const [board, setBoard] = useState({
        title: 'Доска',
        description: 'Описание доски',
        catalogList: [], // Инициализация catalogList
    });
    const [newListTitle, setNewListTitle] = useState('');

    useEffect(() => {
        const fetchBoard = async () => {
            try {
                const data = await getBoardById(boardId);
                console.log('Данные с бэкенда:', data);
                setBoard({
                    title: 'Доска',
                    description: 'Описание доски',
                    catalogList: data.catalogList.map((list) => ({
                        ...list,
                        cardDtoList: list.cardDtoList || [], // Инициализация cardDtoList
                    })),
                });
            } catch (error) {
                console.error('Ошибка при загрузке доски:', error);
            }
        };
        fetchBoard();
    }, [boardId]);

    const handleAddList = async () => {
        if (newListTitle.trim()) {
            const listData = { title: newListTitle };
            try {
                const newList = await createList(boardId, listData);
                setBoard((prevBoard) => ({
                    ...prevBoard,
                    catalogList: [...prevBoard.catalogList, { ...newList, cardDtoList: [] }],
                }));
                setNewListTitle('');
            } catch (error) {
                console.error('Ошибка при создании списка:', error);
            }
        }
    };

    const handleDeleteList = async (listId) => {
        try {
            await deleteListById(listId);
            setBoard((prevBoard) => ({
                ...prevBoard,
                catalogList: prevBoard.catalogList.filter((list) => list.id !== listId),
            }));
        } catch (error) {
            console.error('Ошибка при удалении списка:', error);
        }
    };

    const handleAddCard = (listId, newCard) => {
        setBoard((prevBoard) => ({
            ...prevBoard,
            catalogList: prevBoard.catalogList.map((list) =>
                list.id === listId
                    ? { ...list, cardDtoList: [...list.cardDtoList, newCard] }
                    : list
            ),
        }));
    };

    if (!board || !board.catalogList) {
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
                {board.catalogList.map((list) => (
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