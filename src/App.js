import logo from './logo.svg';
import './App.css'
import GetMovies from './components/GetMovies';
import Footer from './Footer';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <GetMovies/>
     <Footer/>
     

    </div>
  );
}

export default App;






