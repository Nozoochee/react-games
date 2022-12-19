import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Home from "./pages/Home"
import About from './pages/About';
import Games from './pages/Games/GamesList';
import Memory from './pages/Games/Memory/Memory';
import {Route, Routes} from "react-router-dom"
import NotFound from './pages/NotFound';

function App() {
  return( 
  <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" >
          <Route index element={<Games />} />
          <Route path="memory" element={<Memory />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </>
  )
}

export default App;
