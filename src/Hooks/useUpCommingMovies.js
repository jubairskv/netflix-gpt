import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { addUpCommingMovies } from '../Utils/movieSlice';
import{ useEffect } from 'react'

const useTopRatedMovies = () => {
    //fetch data from TMDB api to update store
    const dispatch = useDispatch();
    const getUpCommingMovies = async () => {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?page=1',
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results)
        dispatch(addUpCommingMovies(json.results));
    };

    useEffect(() => {
        getUpCommingMovies();
    }, [])
}

export default useTopRatedMovies