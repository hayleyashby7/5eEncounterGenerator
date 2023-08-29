import Encounter from '../encounter/encounter';

const Home: React.FC = () => {
    return (
        <div className='flex flex-col bg-orange-100 text-center text-red-950'>
            <p className='m-2'>Welcome to DDEG.</p>
            <Encounter />
        </div>
    );
};

export default Home;
