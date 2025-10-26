import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';

// import pages
import SingUp from "./pages/Login/SingUp/SingUp";
import SingIn from "./pages/Login/SingIn/SingIn";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <main>
        <Header/>
          <Routes>
            <Route path="/SingIn" element={<SingIn/>}/>
            <Route path="/SingUp" element={<SingUp/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </main>
    </Router>
  );
}

export default App;
