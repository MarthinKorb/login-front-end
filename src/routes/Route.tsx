import React, { useContext } from 'react';
import {
    RouteProps as ReactDOMRouteProps,
    Route as ReactDOMRoute,
    Redirect,
} from 'react-router-dom';

import { AuthContext } from '../Hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { user } = useContext(AuthContext);

    // console.log(user, isPrivate);

    return (
        <ReactDOMRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: isPrivate ? '/' : '/dashboard',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
};

export default Route;
