import { NavLink } from "react-router-dom";
import './Page404.css';

function Page404()
{
    return(

        <div>
            <div className="p404">
                <p className="p404__404">404</p>
                <p className="p404__txt">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/Home" className="p404__link">Retourner sur la page d’accueil</NavLink>
            </div>
            
        </div>
        
    )
}

export default Page404