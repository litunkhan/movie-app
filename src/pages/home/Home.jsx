import useTitle from '../../hooks/useTitle';
import HeroBanner from './heroBanner/HeroBanner';
import Popular from './popular/Popular';
import './style.scss'
import TopRated from './toprated/TopRated';
import Trending from './trending/Trending';

const Home = () => {
    useTitle('Home')
    return (
        <div className='homepage'>
           <HeroBanner></HeroBanner> 
           <Trending></Trending>
           <Popular></Popular>
           <TopRated></TopRated>
           
        </div>
    );
};

export default Home;