import React, { useContext } from 'react';
import { AuthContext } from '../../Hooks/auth';

const Home: React.FC = () => {
    const { signOut } = useContext(AuthContext);

    return (
        <>
            <div
                style={{
                    color: '#32C7AB',
                    margin: 30,
                }}
            >
                <h1>Bem vindo</h1>
            </div>
            <button type="button" onClick={signOut}>
                Sair
            </button>
        </>
    );
};

export default Home;
