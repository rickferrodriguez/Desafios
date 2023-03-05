import './App.css'
import {Header} from './components/Header.jsx'
import {PROJECTS} from './constants.js'

const Projects = () => {
  return (
    <>
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {
          PROJECTS.map((pr) => (
            <div key={pr.id} className="project-card">
              <p>{pr.name}</p>
              <img src={pr.img} alt=""/>
            </div>
          ))
        }
      </div>
    </>
  )
}

const Tecnologies = () => {
  return (
    <>
      <h2>TECNOLOGIES</h2>
    </>
  )
}

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <section className="home-main-content">
          <h1>Hi I'm RickFeR <span className="emoji-header">🏋🏼‍♂️</span></h1>
          <p className="home-principal-text">Desarrollador Web que construye su propia versión de un mundo digital.</p>
        </section>
        <section className="tecnologies">
          <Tecnologies />
        </section>
        <section className="projects">
          <Projects/>
        </section>
      </main>
    </>
  )
}

export default App
