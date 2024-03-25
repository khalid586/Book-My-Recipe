import { Outlet } from "react-router-dom"
import Component from "./Navbar"
import { createContext } from "react";
import { useState } from "react";

export const AssetContext = createContext();

function App() {
  const [toCook,setToCook] = useState([]);
  const [cooking,setCooking] = useState([]);
  return(
        <AssetContext.Provider value={{toCook,setToCook,cooking,setCooking}}>
          <div className="font-custom">
                <Component />
                <Outlet />
          </div>
        </AssetContext.Provider>
  )
}

export default App
