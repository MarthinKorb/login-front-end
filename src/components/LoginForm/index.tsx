import React, {
    ChangeEvent,
    useCallback,
    useContext,
    useState,
    useEffect,
} from 'react';
import { store } from 'react-notifications-component';

import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../Hooks/auth';
import ICredentials from '../../interfaces/credentials';

import './styles.css';

const LoginForm: React.FC = () => {
    const history = useHistory();
    const [model, setModel] = useState<ICredentials>({
        email: '',
        password: '',
    });

    const { user, signIn } = useContext(AuthContext);

    useEffect(() => {
        console.log(user);
    }, [user]);

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
                // await api.post('/sessions', model);
                await signIn(model);
                store.addNotification({
                    title: 'Sucesso!',
                    message: 'Login realizado com sucesso!',
                    type: 'success',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 2000,
                    },
                });

                history.push('/inicio');
            } catch (err) {
                store.addNotification({
                    title: 'Erro!',
                    message: 'Erro ao fazer o login',
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
        [model, signIn],
    );

    return (
        <>
            <h1>Login</h1>
            <span className="login-subtitle">Informe suas credenciais</span>
            <div className="form-login">
                <form onSubmit={onSubmit}>
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

                    <button className="custom-buttom" type="submit">
                        Entrar
                    </button>

                    <div className="actions">
                        <Link to="/esqueci-senha">Esqueci minha senha</Link>
                        <p>
                            Não tem uma conta?{' '}
                            <Link to="/cadastro">Cadastre-se</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
