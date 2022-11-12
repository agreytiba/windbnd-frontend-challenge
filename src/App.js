import Home from "./pages/Home"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './styles/General.css';

function App() {
  return (
    <div className='App'>
    <div className="wrapper">
      <Navbar />
     <Home/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
