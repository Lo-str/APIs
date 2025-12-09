import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import API from "./pages/API/API.jsx";
import SignInUp from "./pages/SignInUp/SignInUp.jsx";

import Navbar from "./components/Navbar/Navbar.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <main style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
        }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<API />} />
            <Route path="/sign_up" element={<SignInUp />} />
          </Routes>
        </main>
      </BrowserRouter>


    </>
  );
}

export default App;
