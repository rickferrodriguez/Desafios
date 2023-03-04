const Link = ({text}) => {
  return (
      <a className="link" href=""><p>{text}</p></a>
  )
}

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-link-container">
          <Link text='Home' ></Link>
          <Link text='About' ></Link>
          <Link text='Projects' ></Link>
        </div>
      </nav>
      <ul>
        <li><a href="#">
          <img 
            className="social-header-icon" 
            alt="GitHub" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" >
          </img>
        </a></li>
        <li><a href="#">
          <img 
            className="social-header-icon" 
            alt="GitHub" 
            src="https://www.svgrepo.com/show/103404/linkedin-logo.svg" >
          </img>
        </a></li>
        <li><a href="#">
          <img 
            className="social-header-icon" 
            alt="GitHub" 
            src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" >
          </img>
        </a></li>
      </ul>
      
    </header>
  )
}
