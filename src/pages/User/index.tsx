import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles.css';

// import LoginForm from '../../components/LoginForm';

import Routes from '../../routes';

const Layout: React.FC = () => {
    return (
        <div className="layout-page">
            <div className="layout-page-left">
                <Row className="row-custom">
                    <Col xs="12" md="12" lg="7" className="form-page">
                        <div className="container">
                            <Routes />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Layout;
