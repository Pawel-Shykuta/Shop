import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return(
    <GlobalContext.Provider value={{cartItems, setCartItems}}>
        {children}
    </GlobalContext.Provider>
  )
};

export const useGlobal = () => useContext(GlobalContext);
