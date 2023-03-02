import React from 'react';
import './Loader.css';


/**
 * Loader component used on home page (in the gallery component) and on house page while the datas are loading
 * 
 */
function Loader() {

  return (

    <div className="loader">
        <p className="loader__txt">Nos propriétés disponibles arrivent... </p>
        <div className="loader__anim">
            <div className="loader__anim--spin"></div>
        </div>
    </div>

  )

}

export default Loader;



