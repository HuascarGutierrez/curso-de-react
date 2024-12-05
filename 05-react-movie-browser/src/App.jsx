import './App.css'
import {withResults} from './mocks/withResults.js'
import { Movies } from './components/Movies.jsx'
function App() {
  const movies = withResults.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID, title: movie.Title, year: movie.Year, poster: movie.Poster
  }))
  
  return (
    <>
      <div className='page'>
        <header>
        <h1>Movie searcher</h1>
        <form className='form'>
          <input type="text" placeholder='movie'/>
          <button type='submit'>Search</button>
        </form>
        </header>
        <main>
          <Movies movies={mappedMovies}/>
        </main>
      </div>
    </>
  )
}

export default App
