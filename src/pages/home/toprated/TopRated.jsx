import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/swichTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";


const TopRated = () => {
    const [endpoint,setEndpoint] = useState('movie')
    const {data,loading} = useFetch(`/${endpoint}/top_rated`)
    const onTabChange = (tab)=>{
            setEndpoint(tab==='Movies'?'movie':'tv')  
    }
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">
                    Top Rated
                </span>
                <SwitchTabs  data={['Movies','Tv Shows']} onTabChange={onTabChange}></SwitchTabs>
            </ContentWrapper>
            <Carousel endpoint={endpoint} data = {data?.results} loading={loading}></Carousel>
        </div>
    );
};

export default TopRated;