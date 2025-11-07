import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import './App.scss';

// import pages
import SingUp from "./pages/Login/SingUp/SingUp";
import SingIn from "./pages/Login/SingIn/SingIn";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";

function AppContent(){
  const location = useLocation()
  const hideLocation = location.pathname.includes("singIn") || location.pathname.includes("SingUp");

  return(
      <main>
        {!hideLocation && <Header/>}
          <Routes>
            <Route path="/SingIn" element={<SingIn/>}/>
            <Route path="/SingUp" element={<SingUp/>}/>
            <Route path="/Shop" element={<Shop/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        {!hideLocation && <Footer/>}          
      </main>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
