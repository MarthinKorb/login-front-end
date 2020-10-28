import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactNotification from 'react-notifications-component';

import 'react-notifications-component/dist/theme.css';
import AppProvider from './Hooks';
import Routes from './routes/index';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ReactNotification />
            <AppProvider>
                <Routes />
            </AppProvider>
        </BrowserRouter>
    );
};

export default App;
