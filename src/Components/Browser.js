import useNowPlayingMovies from '../Hooks/useNowPalyingMovies'
import usePopularMovies from "../Hooks/usePopularMovies"
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpCommingMovies from "../Hooks/useUpCommingMovies"
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browser = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
