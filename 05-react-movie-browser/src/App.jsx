import './App.css'
import { useRef } from 'react'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'

function App() {
  const {movies: mappedMovies} = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    console.log(value)
  }

  return (
    <> 
      <div className='page'>
        <header>
        <h1>Movie searcher</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder='movie'/>
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
