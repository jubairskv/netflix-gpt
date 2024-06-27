import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../Utils/movieSlice';
import{ useEffect } from 'react'

const useTopRatedMovies = () => {
    //fetch data from TMDB api to update store
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?page=1',
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results)
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies