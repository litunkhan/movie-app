/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/details/MovieDetails";
import MovieSearchResult from "./pages/searchResult/MovieSearchResult";
import MovieExplore from "./pages/explore/MovieExplore";
import MoviePageNotFound from "./pages/404/MoviePageNotFound";
import MovieHeader from "./components/header/MovieHeader";
import MovieFooter from "./components/footer/MovieFooter";

const App = () => {
  const dispatch = useDispatch()
  const {url} = useSelector((state)=> state.home)
  useEffect(()=>{
  fetchDataFromApi('/configuration')
  .then(res=>{
      console.log(res)
      const url = {
         backdrop:res.images?.secure_base_url+'original',
         poster:res.images?.secure_base_url+'original',
         profile:res.images?.secure_base_url+'original',
      }
      dispatch(getApiConfiguration(url))
  })
  

  const genresCall = async()=>{
    let promises = []
    let endPoint = ['tv','movie']
    let allGenres = {}

    endPoint.forEach(url=>{
        promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)
    console.log(data)

    data.map(({genres})=>{
       return genres.map(item=> (allGenres[item.id] = item))
    })
    dispatch(getGenres(allGenres))
}
genresCall()
  },[dispatch])

  
  return (
   <BrowserRouter>
   <MovieHeader/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:mediaType/:id" element={<MovieDetails/>}/>
          <Route path="/search/:query" element={<MovieSearchResult/>}/>
          <Route path="/explore/:mediaType"element={<MovieExplore/>}/>
          <Route path="*"element={<MoviePageNotFound/>}/>
        </Routes>
    <MovieFooter/>
   </BrowserRouter>
  );
};

export default App;
