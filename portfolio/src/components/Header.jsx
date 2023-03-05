const Link = ({text}) => {
  return (
      <a className="link" href=""><p>{text}</p></a>
  )
}

const List = ({ alt, src, href}) => {
  return (
          <li className="social-header-icon"><a href={href}>
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
          <Link text='About' ></Link>
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
          />
          <List
            alt="GitHub" 
            src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" 
          />
        </ul>
      </nav>
      
    </header>
  )
}
