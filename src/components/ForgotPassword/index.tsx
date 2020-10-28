import React, { ChangeEvent, useCallback, useState } from 'react';
import { store } from 'react-notifications-component';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

// import "./styles.css";
import { Container } from './styles';

const ForgotPasswordForm: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState({
        email: '',
    });

    const handleUpdateEmail = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setEmail({
                ...email,
                [e.target.name]: e.target.value,
            });
        },
        [email],
    );

    const onSubmit = useCallback(
        async (e: ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                await api.post('/forgot-password', email);
                store.addNotification({
                    title: 'Sucesso!',
                    message: 'Email de recuperação enviado com sucesso!',
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
                    message: 'Erro ao enviar email. Usuário não encontrado',
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
        [email, history],
    );
    return (
        <Container>
            <h1>Recuperar Senha</h1>
            <span className="login-subtitle text-center">
                Informe seu email para enviarmos o procedimento de recuperação
                de senha
            </span>
            <div className="form-login">
                <form onSubmit={onSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="custom-input"
                        required
                        onChange={handleUpdateEmail}
                    />

                    <button className="custom-buttom" type="submit">
                        Enviar
                    </button>

                    <div className="actions">
                        <Link to="/login">Voltar para o Login</Link>
                        <p>
                            Não tem uma conta?{' '}
                            <Link to="/cadastro">Cadastre-se</Link>
                        </p>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default ForgotPasswordForm;
