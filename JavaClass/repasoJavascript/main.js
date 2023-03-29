import './style.css'

const PREFIX_MOVIES = 'http://www.omdbapi.com/?apikey=5a03f14a'

const form = document.querySelector('#formMovie')
const log = document.querySelector('#log')
const filters = document.querySelector('#filters')

const getMovies = async (event) => {
  event.preventDefault()
  const data = Object.fromEntries(
    new FormData(event.target)
  )

  if (data.search === ' ') return null

  try {
    const response = await fetch(`${PREFIX_MOVIES}&s=${data.search}`)
    const json = await response.json()
    const movies = json.Search
    const mappedMovies = movies?.map(m => ({
      id: m.imdbID,
      title: m.Title,
      poster: m.Poster,
      year: m.Year,
      type: m.Type
    }))

    showMovies({ mappedMovies })
  } catch (e) {
    throw new Error('Failed to get movies')
  }
}

async function showMovies ({ mappedMovies }) {
  const myMovies = await mappedMovies
  myMovies
    ? log.innerHTML = `
      <ul class='movies'>
        ${mappedMovies.map(movies => {
          return `
        <li class='movie'>
          <h3>${movies.title}</h3>
          <img src=${movies.poster} alt=${movies.title} />
          <p>${movies.year}</p>
        </li>`
        }).join('\n')}
      </ul>
      `
    : log.innerText = 'no hay peliculas'
}

form.addEventListener('submit', getMovies)
