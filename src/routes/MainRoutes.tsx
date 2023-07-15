import { useRoutes } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { MainPage } from '../pages/MainPage';

export const MainRoutes = () => {
    return useRoutes([
        { path: "/", element: <MainPage /> },
        { path: '*', element: <NotFound /> }
    ])
}