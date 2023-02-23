
import logo from './assets/LOGO_footer.png';
import './Footer.css';

/**
 * Component footer shows on every pages
 * @returns 
 */
function Footer()
{
    return(
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="logo kasa" />
            <p className="footer__text">&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
