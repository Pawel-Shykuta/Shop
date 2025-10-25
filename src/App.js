import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';

// import pages
import SingUp from "./pages/Login/SingUp/SingUp";
import SingIn from "./pages/Login/SingIn/SingIn";


function App() {
  return (
    <Router>
      <main>
          <Routes>
            <Route path="/SingUp" element={<SingUp/>}/>
            <Route path="/" element={<SingIn/>}/>
          </Routes>
      </main>
    </Router>
  );
}

export default App;
