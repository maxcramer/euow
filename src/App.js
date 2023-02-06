import { Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </body>
      <Footer />
    </div>
  );
}

export default App;
