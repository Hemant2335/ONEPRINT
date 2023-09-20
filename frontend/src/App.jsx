import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Newnavbar , Fotter} from "./components" ;
import { Homepage , Shop , Login , Register , ProductDetail  , Cart , Profile , Dashboard , Upload} from './Pages';
import { app } from './firebaseconfig';
import StateProvider from './context/State';

const App = () => {
  return (
    <div>
      <StateProvider>
      <Router>
        <Newnavbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/shop" element={<Shop/>} />
          <Route exact path="/productdetails/:slug" element={<ProductDetail/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/dashboard/upload" element={<Upload/>} />
        </Routes>
        <Fotter/>
      </Router>
      </StateProvider>
    </div>
  )
}

export default App