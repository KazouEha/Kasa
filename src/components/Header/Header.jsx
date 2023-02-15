import logo from './assets/LOGO_header.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header()
{
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="logo kasa" />
            <nav className="header__nav">
                <NavLink to="/" className="header__nav--link">Accueil</NavLink>
                <NavLink to="/About" className="header__nav--link">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header

