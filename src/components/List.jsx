// import React, { useState } from 'react';
// import Card from './Card';
// import { createCard, deleteListById } from '../api/api';
//
// const List = ({ list, onDeleteList, onAddCard }) => {
//     const [newCardTitle, setNewCardTitle] = useState('');
//
//     const handleAddCard = async () => {
//         if (newCardTitle.trim()) {
//             const cardData = { title: newCardTitle, description: '' };
//             const newCard = await createCard(list.id, cardData);
//             onAddCard(list.id, newCard);
//             setNewCardTitle('');
//         }
//     };
//
//     return (
//         <div className="list">
//             <div className="list-header">
//                 <h3>{list.title}</h3>
//                 <button onClick={() => onDeleteList(list.id)}>Удалить список</button>
//             </div>
//             <div className="cards">
//                 {list.cards.map((card) => (
//                     <Card key={card.id} card={card} />
//                 ))}
//             </div>
//             <div className="add-card">
//                 <input
//                     type="text"
//                     value={newCardTitle}
//                     onChange={(e) => setNewCardTitle(e.target.value)}
//                     placeholder="Название карточки"
//                 />
//                 <button onClick={handleAddCard}>Добавить карточку</button>
//             </div>
//         </div>
//     );
// };
//
// export default List;

import React, { useState } from 'react';

const List = ({ list, onDeleteList, onAddCard }) => {
    const [newCardTitle, setNewCardTitle] = useState('');
    const [newCardDescription, setNewCardDescription] = useState('');

    const handleAddCard = () => {
        if (newCardTitle.trim() && newCardDescription.trim()) {
            const newCard = {
                id: Math.random(),
                title: newCardTitle,
                description: newCardDescription,
            };
            onAddCard(list.id, newCard);
            setNewCardTitle('');
            setNewCardDescription('');
        }
    };

    return (
        <div className="list">
            <h3>{list.title}</h3>
            <button onClick={() => onDeleteList(list.id)}>Удалить список</button>
            <div className="cards">
                {list.cardDtoList && list.cardDtoList.map((card) => (
                    <div key={card.id} className="card">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <div className="add-card">
                <input
                    type="text"
                    value={newCardTitle}
                    onChange={(e) => setNewCardTitle(e.target.value)}
                    placeholder="Название карточки"
                />
                <input
                    type="text"
                    value={newCardDescription}
                    onChange={(e) => setNewCardDescription(e.target.value)}
                    placeholder="Описание карточки"
                />
                <button onClick={handleAddCard}>Добавить карточку</button>
            </div>
        </div>
    );
};

export default List;