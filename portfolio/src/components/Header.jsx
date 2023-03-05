const Link = ({text, id=''}) => {
  return (
      <a onClick={() => window.location.replace(`/#${id}`)} 
      className="link"><p>{text}</p></a>
  )
}

const List = ({ alt, src, href}) => {
  return (
    <li className="social-header-container"><a href={href} target="_blank">
      <picture>
        <img 
          className="social-header-icon" 
          alt={alt} 
          src={src} >
        </img>
      </picture>
    </a></li>
  )
}

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-link-container">
          <Link text='Home' ></Link>
          <Link text='Tecnologies' id='knowledge' ></Link>
          <Link text='Projects' id='projects'></Link>
        </div>
        <ul className='social-header'>
          <List 
            alt='GitHub' 
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'
            href='https://github.com/rickferrodriguez'
          />
          <List
            alt="GitHub" 
            src="https://www.svgrepo.com/show/103404/linkedin-logo.svg" 
            href="https://www.linkedin.com/in/richard-rodriguez-13a334267/"
          />
          <List
            alt="GitHub" 
            src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" 
            href='mailto:richardfernandorodriguez@gmail.com'
          />
        </ul>
      </nav>
      
    </header>
  )
}
