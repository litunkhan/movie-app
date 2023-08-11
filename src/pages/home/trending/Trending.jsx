/* eslint-disable no-unused-vars */
import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/swichTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";


const Trending = () => {
    const [endpoint,setEndpoint] = useState('day')
    const {data,loading} = useFetch(`/trending/all/${endpoint}`)
    const onTabChange = (tab)=>{
            setEndpoint(tab==='Day'?'day':'week')  
    }
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">
                    Trending
                </span>
                <SwitchTabs  data={['Day','Week']} onTabChange={onTabChange}></SwitchTabs>
            </ContentWrapper>
            <Carousel data = {data?.results} loading={loading}></Carousel>
        </div>
    );
};

export default Trending;