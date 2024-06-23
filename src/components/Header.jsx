import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import './Header.css'

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="nav-link">
          Sorting Visualizer
        </Link>
        <Link to="/nodes" className="nav-link">
          Nodes
        </Link>
      </div>
      <div className="header-right">
        <a
          href="https://github.com/thejamesgore/comp-sci/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub size={24} />
        </a>
        <button onClick={toggleDarkMode} className="icon-link">
          {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header
