import useTitle from '../../hooks/useTitle';
import HeroBanner from './heroBanner/HeroBanner';
import './style.scss'

const Home = () => {
    useTitle('Home')
    return (
        <div className='homepage'>
           <HeroBanner></HeroBanner> 
           <div style={{height:'1000px'}}></div>
        </div>
    );
};

export default Home;