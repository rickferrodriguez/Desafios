import './style.css'
import { getMovies } from './src/services/getMovies.js'

const $ = selector => document.querySelector(selector)

const $log = $('#log')
const $formMovie = $('#formMovie')
const $search = $('#search')
const $filters = $('#filters')

const showMovies = async ({ search, filters }) => {
  const mappedMovies = await getMovies({ search, filters })
  console.log(mappedMovies)
  const hasMovies = mappedMovies?.length > 0

  hasMovies
    ? $log.innerHTML =
    `
      <ul class="movies">
        ${mappedMovies.map((movie) => {
          return `
        <li>
          <h3>${movie.title}</h3>
          <img src=${movie.poster} alt=${movie.title} />
        </li>`
        }).join('\n')}
      </ul>
    `
    : $log.innerHTML = `<p>no hay ${filters}</p>`
}

function filterMovies (event) {
  event.preventDefault()
  const search = $search.value
  const filters = $filters.value

  if (search === '') return

  showMovies({ search, filters })
}

$formMovie.addEventListener('submit', filterMovies)
$filters.addEventListener('change', filterMovies)
