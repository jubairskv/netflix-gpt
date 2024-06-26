import useNowPlayingMovies from '../Hooks/useNowPalyingMovies'
import Header from './Header'


const Browser = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browser
