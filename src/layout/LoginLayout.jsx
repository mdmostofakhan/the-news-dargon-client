import React from 'react';
import NavigationBar from '../pages/Shared/NavigatinBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
             <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;