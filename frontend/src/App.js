import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/navbar';
import Home from "./components/Home";
import ShowRoom from "./components/ShowRoom";
import CarDetails from "./components/CarDetails"
import Signup from './components/signup';
import { Login } from './components/login';

// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/showroom" element={<ShowRoom />}></Route>
          <Route exact path="/car-details/:id" element={<CarDetails />}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
