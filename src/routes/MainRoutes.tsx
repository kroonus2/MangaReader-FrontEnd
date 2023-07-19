import { useRoutes } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { MainPage } from '../pages/MainPage';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const MainRoutes = () => {
    return useRoutes([
        { path: "/", element: <MainPage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: '*', element: <NotFound /> }
    ])
}