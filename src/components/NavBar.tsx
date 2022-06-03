import React from 'react'
import { Link } from 'react-router-dom'

interface NavBarProps {
  pageTitle: string,
}

const NavBar = ({pageTitle}: NavBarProps) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-secondary text-light">
      <div className="container">
        <span className="navbar-brand">
          <Link to="/" className="link-light text-decoration-none">Emily's CFG Repository</Link>&ensp;&bull;&ensp;<span className="text-primary">{pageTitle}</span>
        </span>
      </div>
    </nav>
  )
}

export default NavBar
