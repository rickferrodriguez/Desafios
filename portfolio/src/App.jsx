import './App.css'
import {Header} from './components/Header.jsx'
import {PROJECTS} from './constants.js'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <section className="home-main-content">
          <h1>Hi I'm RickFeR <span className="emoji-header">🏋🏼‍♂️</span></h1>
          <p className="home-principal-text">Desarrollador full-stack que construye su propia versión de un mundo digital.</p>
        </section>
        <section className="projects">
          <h2>PROJECTS</h2>
          <div className="projects-container">
            {
              PROJECTS.map((pr,index) => (
                  <div key={index} className="project-card">
                    <p>{pr.name}</p>
                    <img src={pr.img} alt=""/>
                  </div>
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default App
