import useTitle from '../../hooks/useTitle';
import HeroBanner from './heroBanner/HeroBanner';
import './style.scss'
import Trending from './trending/Trending';

const Home = () => {
    useTitle('Home')
    return (
        <div className='homepage'>
           <HeroBanner></HeroBanner> 
           <Trending></Trending>
           {/* <div style={{height:'1000px'}}></div> */}
        </div>
    );
};

export default Home;