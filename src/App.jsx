import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoutesList from './Routes';
import './App.css';

/**
 * Use of component header to be shown on every pages
 * Use of component footer to be shown on every pages
 * Use of component RoutesList which will redirect to the Routes we defined in Routes.js and will redirect on every pages
 * @returns 
 */
function App() 
{

  return (
    <div className="App">
      <Header />
        <RoutesList />
      <Footer />
    </div>
  )

}

export default App;
