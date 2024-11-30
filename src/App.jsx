import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import News from "./pages/News";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Coins from "./pages/Coins";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 min-h-screen">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/coins/:coinId" element={<Coins/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
