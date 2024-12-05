import { withResults } from "../mocks/withResults"

export function useMovies () {
    const movies = withResults.Search
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID, title: movie.Title, year: movie.Year, poster: movie.Poster
    }))
    return {movies: mappedMovies}
  }