import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from "./components/Home";
import ShowRoom from "./components/ShowRoom";
import CarDetails from "./components/CarDetails"

// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/showroom" element={<ShowRoom />}></Route>
          {/* <Route exact path="/car_details/:carId" element={<CarDetails />}></Route> */}
          <Route exact path="/car_details" element={<CarDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
