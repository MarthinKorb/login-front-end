import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import LoginForm from '../components/LoginForm';
import CreateForm from '../components/Create';
import ForgotPasswordForm from '../components/ForgotPassword';
import Home from '../pages/Home';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/cadastro" exact component={CreateForm} />
            <Route path="/esqueci-senha" exact component={ForgotPasswordForm} />
            <Route path="/inicio" exact component={Home} isPrivate />
        </Switch>
    );
};

export default Routes;
