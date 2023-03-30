// import withResult from '../mocks/withResults.json'
const PREFIX_MOVIES = 'https://www.omdbapi.com/?apikey=5a03f14a'

export function getMovies ({ search, filters }) {
  if (search === '') return null

  return fetch(`${PREFIX_MOVIES}&s=${search}`)
    .then(res => res.json())
    .then(data => {
      const movies = data.Search
      const mappedMovies = movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        type: movie.Type,
        year: movie.Year
      }))

      console.log(filters)
      if (filters === 'all') return mappedMovies

      return mappedMovies.filter(m => m.type === filters)
    }).catch(err => console.error(err))
}
