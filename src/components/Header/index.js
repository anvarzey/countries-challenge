import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import './styles.css'

export default function Header() {
  const {theme, changeTheme} = useContext(ThemeContext)
  let moon = regular('moon')
  theme === 'light' ? moon = regular('moon') : moon = solid('moon')

  return (
    <header className='header'>
      <div className='header-content'>
        <Link to='/'>
          <h2 className='title'>Where in the world?</h2>
        </Link>
        <div onClick={changeTheme} className='dark-mode-container'>
          <FontAwesomeIcon icon={moon} />
          <span className='dark-mode-text'>Dark Mode</span>
        </div>
      </div>
    </header>
  );
}
