import { Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Fi from "./Pages/Fi/Fi";
import Fth from "./Pages/Fth/Fth";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fth" element={<Fth />} />
          {/* <Route path="/fi" element={<Fi />} /> */}
        </Routes>
      </body>
      <Footer />
    </div>
  );
}

export default App;
