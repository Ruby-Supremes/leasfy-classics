import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from "./components/Home";
import Login from './components/Login';
import ShowRoom from "./components/ShowRoom";
import Signup from './components/Signup';
import LoginPage from './components/LoginPage';
import AdminLogin from './components/AdminLogin';
import Owner from './components/Owner';
import Client from './components/Client';


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
          <Route exact path="/loginPage" element={<LoginPage />}></Route>
          <Route exact path="/adminlogin" element={<AdminLogin />}></Route>
          <Route exact path="/owner" element={<Owner />}></Route>
          <Route exact path="/client" element={<Client />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
