import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/main_layout';
import Home from '../home/home';
import NotFound from '../not_found/notFound';

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default Router;
