import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [boardId, setBoardId] = useState(null);

    return (
        <AuthContext.Provider value={{ userId, setUserId, boardId, setBoardId }}>
            {children}
        </AuthContext.Provider>
    );
};