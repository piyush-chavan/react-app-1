import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Contact from './components/contact';
import Home from './components/home';
import Planets from './components/planets';
import Gallery from './components/gallery';
import Blackholes from './components/blackholes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/planets" element={<Planets/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/black-holes" element={<Blackholes/>}/>


            {/* <Route path="users/*" element={<Users />} /> */}
          </Routes>
          
      </div>

    </Router>
  );
}

export default App;
