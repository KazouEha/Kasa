import logo from './assets/LOGO_header.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header()
{
    
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="logo kasa" />
            <nav className="header__nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "isActive" : ""}><p>Accueil</p></NavLink>
                <NavLink to="/About" className={({ isActive }) => isActive ? "isActive" : ""}><p>A propos</p></NavLink>
            </nav>
        </header>
    )
}

export default Header

