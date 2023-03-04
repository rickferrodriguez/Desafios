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
    </header>
  )
}
