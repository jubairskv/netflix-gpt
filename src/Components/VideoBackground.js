import { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constant'

const VideoBackground = ({movieId}) => {

  const getMovieVideo = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US',API_OPTIONS)

    const json =await data.json()
    console.log(json)

    const filter_data =json.results.filter(video=>video.type==="Trailer")
    console.log(filter_data)

    const trailer=filter_data.length ? filter_data[0]:json.results[0];
    console.log(trailer)
  }

  useEffect(()=>{
    getMovieVideo()
  },[])

  return ( 
    //fetch trailer video background
    <div> 

    </div>
  )
}

export default VideoBackground
