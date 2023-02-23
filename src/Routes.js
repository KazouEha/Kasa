import {Route, Routes} from "react-router-dom";

import Home from './pages/Home/Home';
import House from './pages/House/House';
import About from './pages/About/About';
import Page404 from './pages/Page404/Page404';

/**
 * Use of route & and routes function from react-router-dom and import here all the pages
 * List of routes we use on our react app : Home, House, About and 404 in case of errors
 * 
 * @returns 
 */
function RoutesList()
{
    return(
        <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/House/:id' element={<House />} />
            <Route path='/About' element={<About />} />
            <Route path='*' element={<Page404 />} /> 
        </Routes>
    )
}

export default RoutesList

