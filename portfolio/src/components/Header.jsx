const Link = ({text}) => {
  return (
      <a className="link" href="#"><p>{text}</p></a>
  )
}

const List = ({ alt, src, href}) => {
  return (
          <li className="social-header-icon"><a href={href} target="_blank">
            <img 
              className="social-header-icon" 
              alt={alt} 
              src={src} >
            </img>
          </a></li>
  )
}

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-link-container">
          <Link text='Home' ></Link>
          <Link text='Tecnologies' ></Link>
          <Link text='Projects' ></Link>
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
