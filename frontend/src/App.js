import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Car from './components/Car';
import Header from './components/Header';
import Home from "./components/Home";
import Login from './components/Login';
import Reservation from './components/Reservation';
import ShowRoom from "./components/ShowRoom";
import Signup from './components/Signup';



// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/showroom" element={<ShowRoom />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/car" element={<Car />}></Route>
          <Route exact path="/reservation" element={<Reservation />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
