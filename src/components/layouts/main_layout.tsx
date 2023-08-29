import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

export const MainLayout = () => (
    <div className='flex min-h-screen w-screen flex-col bg-neutral-900'>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
);
