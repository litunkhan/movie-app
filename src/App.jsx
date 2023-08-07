import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";


const App = () => {
  const dispatch = useDispatch()
  const {url} = useSelector((state)=> state.home)
  useEffect(()=>{
  fetchDataFromApi('/movie/popular')
  .then(res=>{
      console.log(res)
      dispatch(getApiConfiguration(res))
  })
  },[dispatch])
  return (
    <div>
      {console.log(url?.total_pages)}
     <p>{url?.total_pages}</p>
    </div>
  );
};

export default App;
