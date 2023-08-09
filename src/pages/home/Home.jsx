import useTitle from '../../hooks/useTitle';
import HeroBanner from './heroBanner/HeroBanner';
import './style.scss'

const Home = () => {
    useTitle('Home')
    return (
        <div className='homepage'>
           <HeroBanner></HeroBanner> 
        </div>
    );
};

export default Home;