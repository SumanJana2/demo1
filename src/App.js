import Login from './components/login';
import Regist from './components/registration';
import Home from './components/home'; 
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/registration" element={<Regist />} />
      </Routes>
    <nav>
      <Link to="/">Home</Link>|<Link to="/login">Login</Link>|<Link to="/registration">Registration</Link>
    </nav>
    </Router>
  );
}

export default App;
