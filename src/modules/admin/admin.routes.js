import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/login.component';

function AdminRoutes () { // many routes will be here.
    const { pathname } = useLocation(); // Hooks

    return (
        <Routes>
            <Route path={pathname} element={<Login />} />
        </Routes>
    );
}

export default AdminRoutes;