import React, { createContext, useCallback, useState } from 'react';
import ICredentials from '../interfaces/credentials';
import api from '../services/api';

interface IUser {
    id: string;
    email: string;
    name: string;
    created_at: Date | string;
    updated_at: Date | string;
}

interface IAuthContextState {
    user: IUser;
    signIn(credentials: ICredentials): Promise<void>;
    signOut(): void;
}

interface IAuthState {
    user: IUser;
    token: string;
}

const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<IAuthState>(() => {
        const user = localStorage.getItem('LoginApiUser');
        const token = localStorage.getItem('LoginApiToken');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            return { token, user: JSON.parse(user) };
        }

        return {} as IAuthState;
    });

    const signIn = useCallback(async (credentials: ICredentials) => {
        const response = await api.post('/sessions', credentials);

        const { user, token } = response.data;

        localStorage.setItem('LoginApiUser', JSON.stringify(user));
        localStorage.setItem('LoginApiToken', token);

        setData({ user, token });
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('LoginApiUser');
        localStorage.removeItem('LoginApiToken');

        setData({} as IAuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
