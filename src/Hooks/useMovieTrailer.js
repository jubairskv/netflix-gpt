import { useEffect} from 'react'
import { API_OPTIONS } from '../Utils/Constant'
import { useDispatch} from 'react-redux';
import { addTailerVideo } from '../Utils/movieSlice';

const useMovieTrailer = (movieId) =>{

 
  

  const dispatch =useDispatch();
  //fetch trailer video && updating the store withe trailer video
  const getMovieVideo = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS)

    const json =await data.json()
    //console.log(json)

    const filter_data =json.results.filter(video=>video.type==="Trailer")
    //console.log(filter_data)

    const trailer=filter_data.length ? filter_data[0]:json.results[0];
    //console.log(trailer)
    dispatch(addTailerVideo(trailer))
  }

  useEffect(()=>{
    getMovieVideo()
  },[])


}

export default useMovieTrailer