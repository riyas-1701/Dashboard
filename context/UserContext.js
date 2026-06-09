"use client";
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [female, setFemale] = useState([]);
    const [male, setMale] = useState([]);
    return (
        <UserContext.Provider value={{ female, setFemale, male, setMale }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}