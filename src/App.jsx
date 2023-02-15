import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoutesList from './Routes';
import './App.css';

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
