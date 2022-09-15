import React, { useRef, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,

  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Etudiant from './components/Etudiant';
import { Home } from './components/Home';

function App() {

  return (  
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/etudiant' element={<Etudiant/>}></Route>
      </Routes>
     </BrowserRouter>
    
    </>
  );
}
export default App;
