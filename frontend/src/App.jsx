import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Navbar , Fotter} from "./components" ;
import { Homepage , Shop , Login , Register } from './Pages';
import { app } from './firebaseconfig';
import StateProvider from './context/State';

const App = () => {
  return (
    <div>
      <StateProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/shop" element={<Shop/>} />
        </Routes>
        <Fotter/>
      </Router>
      </StateProvider>
    </div>
  )
}

export default App