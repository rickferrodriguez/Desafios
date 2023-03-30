import './style.css'
import { getMovies } from './src/services/getMovies.js'

const $ = selector => document.querySelector(selector)

const $log = $('#log')
const $formMovie = $('#formMovie')
const $search = $('#search')
const $filters = $('#filters')

const showMovies = async ({ search, filters }) => {
  const mappedMovies = await getMovies({ search, filters })
  // const hasMovies = mappedMovies?.length > 0

  $log.innerHTML = mappedMovies.map((movie) => {
    const { title, poster, year, id } = movie
    return (`
        <li class="movie">
          <h3>${title}</h3>
          <img src=${poster} alt=${movie.title} />
          <p>${year}</p> 
          <button onclick='datosPelicula(${id})'>my movie</button>
        </li>`)
  }).join('\n')
}

window.datosPelicula = function (id) {
  return console.log(`hola ${id}`)
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
