import useNowPlayingMovies from '../Hooks/useNowPalyingMovies'
import Header from './Header'
import MainContainer from './mainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browser = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
