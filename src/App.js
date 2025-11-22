import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import './App.scss';

import { SaveCart, SaveLicked } from "./utils/LocaleStorege";
import { useGlobal } from "./utils/GlobalContext";

// import pages
import SingUp from "./pages/Login/SingUp/SingUp";
import SingIn from "./pages/Login/SingIn/SingIn";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Cart from "./components/Cart/Cart";
import CartPage from "./pages/CartPage/CartPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import LikdTowars from "./pages/LikeTowars/LikedTowars";
import ContactUs from "./pages/ContactUs/ContactUs";
import Emitter from "./utils/eventEmitter";


function AppContent(){
  const location = useLocation()
  const hideLocation = location.pathname.includes("singIn") || location.pathname.includes("SingUp");

  const {cartItems, likedProducts} = useGlobal()
  const [cartOpen, setCartOPen] = useState(false)


    useEffect(() =>{
        SaveCart(cartItems)
    },[cartItems])

    useEffect(() =>{
      SaveLicked(likedProducts)
    }, [likedProducts])

  return(
      <main>
        {!hideLocation && <Header setCartOPen={setCartOPen}/>}
          {cartOpen && <Cart setCartOPen={setCartOPen} />}
          <Emitter/>
          <Routes>
            <Route path="/CartPage" element={<CartPage/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/LikdTowars" element={<LikdTowars />}/>
            <Route path="/ItemPage/:id" element={<ItemPage />}/>
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
