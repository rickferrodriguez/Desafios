import './style.css'

const PREFIX_MOVIES = 'http://www.omdbapi.com/?apikey=5a03f14a'

const getMovies = async (event) => {
  event.preventDefault()
  const search = event.target.search.value
  let movies = []
  try {
    const response = await fetch(`${PREFIX_MOVIES}&s=${search}`)
    const json = await response.json()
    movies = json
  } catch (e) {
    throw new Error('Failed to get movies')
  }
  log.textContent = movies.Search[0].Title
  console.log(movies.Search)
  return movies
}

const form = document.querySelector('#formMovie')
const log = document.querySelector('#log')

form.addEventListener('submit', getMovies)
