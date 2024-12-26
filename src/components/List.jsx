import React, { useState } from 'react';
import Card from './Card';
import { createCard, deleteListById } from '../api/api';

const List = ({ list, onDeleteList, onAddCard }) => {
    const [newCardTitle, setNewCardTitle] = useState('');

    const handleAddCard = async () => {
        if (newCardTitle.trim()) {
            const cardData = { title: newCardTitle, description: '' };
            const newCard = await createCard(list.id, cardData);
            onAddCard(list.id, newCard);
            setNewCardTitle('');
        }
    };

    return (
        <div className="list">
            <div className="list-header">
                <h3>{list.title}</h3>
                <button onClick={() => onDeleteList(list.id)}>Удалить список</button>
            </div>
            <div className="cards">
                {list.cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
            <div className="add-card">
                <input
                    type="text"
                    value={newCardTitle}
                    onChange={(e) => setNewCardTitle(e.target.value)}
                    placeholder="Название карточки"
                />
                <button onClick={handleAddCard}>Добавить карточку</button>
            </div>
        </div>
    );
};

export default List;