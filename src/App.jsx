import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import API from './pages/API/API.jsx'

import Navbar from "./components/Navbar/Navbar.jsx"
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/API" element={<API />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
