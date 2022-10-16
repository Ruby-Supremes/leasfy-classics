import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Car from './components/Car';
import Header from './components/navbar';
import Home from "./components/Home";
import Login from './components/login';
import Reservation from './components/Reservation';
import ShowRoom from "./components/ShowRoom";
import CarDetails from "./components/CarDetails"
import Signup from './components/signup';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/profile").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
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
