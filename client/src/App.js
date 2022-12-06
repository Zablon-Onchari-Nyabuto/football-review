import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Homepage from './components/Homepage';
// import Forum from './components/Forum';
// import ContactUs from "./components/ContactUs"
// import AboutUs from './components/AboutUs';
import NavBar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <NavBar />
      {/* <Routes>
      <Route path={'/'}  element={<Homepage />} />
        <Route path={"/Forum"}  element={<Forum />} />
        <Route path={"/aboutus"} element={<AboutUs />}/>
        <Route path={"/contactus"} element={<ContactUs />} />
      </Routes> */}
    </div>
  );
}

export default App;
