import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/home";
import Description from "./pages/Description/description";
// import Contact from "./pages/Contact/contact"
import Error from "./pages/Error/error";



function App() {
  return (
    <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/description/:id" element={<Description />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </React.StrictMode>
  );
}

export default App;
