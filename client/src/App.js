import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';

import NavBar from "./components/Navbar";
import Forum from './components/Forum';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <NavBar />
      <Routes>
      <Route path={'/'}  element={<Homepage />} />
        <Route path={"/Forum"}  element={<Forum />} />
        <Route path={"/aboutus"} element={<AboutUs />}/>
        <Route path={"/contactus"} element={<ContactUs />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

