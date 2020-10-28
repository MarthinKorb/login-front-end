import React, { ChangeEvent, useCallback, useState } from 'react';
import { store } from 'react-notifications-component';
import { Link, useHistory } from 'react-router-dom';
import IFormCreateUser from '../../interfaces/FormCreateUser';
import api from '../../services/api';

import { Container } from './styles';
// import './styles.css';

const CreateForm: React.FC = () => {
    const history = useHistory();
    const [model, setModel] = useState<IFormCreateUser>({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    });

    const handleUpdateModel = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setModel({
                ...model,
                [e.target.name]: e.target.value,
            });
        },
        [model],
    );

    const onSubmit = useCallback(
        async (e: ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                await api.post('/users', model);
                store.addNotification({
                    title: 'Sucesso!',
                    message: 'Cadastro realizado com sucesso!',
                    type: 'success',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 2000,
                    },
                });

                history.push('/');
            } catch (err) {
                store.addNotification({
                    title: 'Erro!',
                    message: 'Erro ao fazer o cadastro',
                    type: 'danger',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 2000,
                    },
                });
            }
        },
        [model, history],
    );
    return (
        <Container>
            <h1>Cadastro de Usuário</h1>
            <span className="login-subtitle">Preencha seus dados</span>
            <div className="form-login">
                <form onSubmit={onSubmit}>
                    <label>Nome</label>
                    <input
                        type="text"
                        name="name"
                        className="custom-input"
                        required
                        value={model.name}
                        onChange={handleUpdateModel}
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="custom-input"
                        required
                        value={model.email}
                        onChange={handleUpdateModel}
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        name="password"
                        className="custom-input"
                        required
                        value={model.password}
                        onChange={handleUpdateModel}
                    />

                    <label>Confirme sua senha</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        className="custom-input"
                        required
                        value={model.passwordConfirmation}
                        onChange={handleUpdateModel}
                    />

                    <button className="custom-buttom" type="submit">
                        Cadastrar
                    </button>

                    <div className="actions">
                        <Link to="/login">Já tenho uma conta</Link>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default CreateForm;
