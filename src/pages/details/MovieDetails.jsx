/* eslint-disable no-unused-vars */



import './style.scss'
import DetailsBanner from './detailsBanner/DetailsBanner';
import useTitle from '../../hooks/useTitle';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


const MovieDetails = () => {
    useTitle('Details')
    const { mediaType, id } = useParams();
    
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
    return (
        <div>
           <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
        </div>
    );
};

export default MovieDetails;