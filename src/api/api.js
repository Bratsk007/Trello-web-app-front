import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // URL бэкенда

// Регистрация пользователя
export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
}

// Авторизация пользователя
export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
}

// Сущность: ДОСКА
// Получение всех досок по ID пользователя
export const getBoards = async (userId) => {
    const response = await axios.get(`${API_URL}/boards/${userId}`);
    return response.data;
};

// Создание доски
export const createBoard = async (userId, boardData) => {
    const response = await axios.post(`${API_URL}/boards/${userId}`, boardData);
    return response.data;
};

// Получение доски по ее ID
export const getBoardById = async (boardId) => {
    const response = await axios.get(`${API_URL}/boards/lists/${boardId}`);
    return response.data;
};

// Обновление доски по ID
export const updateBoardById = async (boardId, boardData) => {
    const response = await axios.put(`${API_URL}/boards/${boardId}`, boardData);
    return response.data;
}

// Удаление доски по ID
export const deleteBoardById = async (boardId) => {
    const response = await axios.delete(`${API_URL}/boards/${boardId}`);
    return response.data;
}

// Сущность: СПИСОК
// Создание списка
export const createList = async (boardId, listData) => {
    const response = await axios.post(`${API_URL}/boards/${boardId}/lists`, listData);
    return response.data;
}

// Обновление списка по ID
export const updateListById = async (listId, listData) => {
    const response = await axios.put(`${API_URL}/lists/${listId}`, listData);
    return response.data;
}

// Удаление списка по ID
export const deleteListById = async (listId) => {
    const response = await axios.delete(`${API_URL}/lists/${listId}`);
    return response.data;
}

// Сущность: КАРТОЧКА
// Получение карточки по ID
export const getCardById = async (cardId) => {
    const response = await axios.get(`${API_URL}/cards/${cardId}`);
    return response.data;
}

// Создание карточки
export const createCard = async (listId, cardData) => {
    const response = await axios.post(`${API_URL}/lists/${listId}/cards`, cardData);
    return response.data;
}

// Обновление карточки по ID
export const updateCardById = async (cardId, cardData) => {
    const response = await axios.put(`${API_URL}/cards/${cardId}`, cardData);
    return response.data;
}

// Удаление карточки по ID
export const deleteCardById = async (cardId) => {
    const response = await axios.delete(`${API_URL}/cards/${cardId}`);
    return response.data;
}

// Перемещение карточки в другой список
export const moveCardById = async (cardId, newListId) => {
    const response = await axios.put(`${API_URL}/cards/${cardId}/move`, newListId);
    return response.data;
}