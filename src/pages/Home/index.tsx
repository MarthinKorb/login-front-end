import React, { useContext } from 'react';
import { AuthContext } from '../../Hooks/auth';
import { FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile } from './styles';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const { signOut, user } = useContext(AuthContext);

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src="" alt="" />

                    <Profile>
                        {/* <img src={user.avatar_url} alt="" /> */}
                        <div>
                            <span>Bem vindo, </span>
                            <Link to="/profile">
                                <strong> {user.name} </strong>
                            </Link>
                        </div>
                    </Profile>

                    <button type="button" onClick={signOut}>
                        <FiPower />
                    </button>
                </HeaderContent>
            </Header>
        </Container>
    );
};

export default Home;
