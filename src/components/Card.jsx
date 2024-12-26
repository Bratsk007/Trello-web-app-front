import React, { useState } from 'react';
import { updateCardById, deleteCardById } from '../api/api';

const Card = ({ card }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);

    const handleUpdateCard = async () => {
        const updatedCard = await updateCardById(card.id, { title, description });
        setIsEditing(false);
    };

    const handleDeleteCard = async () => {
        await deleteCardById(card.id);
    };

    return (
        <div className="card">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button onClick={handleUpdateCard}>Сохранить</button>
                    <button onClick={() => setIsEditing(false)}>Отмена</button>
                </div>
            ) : (
                <div>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                    <button onClick={() => setIsEditing(true)}>Редактировать</button>
                    <button onClick={handleDeleteCard}>Удалить</button>
                </div>
            )}
        </div>
    );
};

export default Card;