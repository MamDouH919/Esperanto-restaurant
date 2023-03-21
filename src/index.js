import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Contact from "./pages/Contact";
import OurBranches from "./pages/OurBranches";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column justify-content-between" style={{height: "100vh"}}>
        <Layout />
        <Routes >
          <Route index path="/" element={<Home />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-branches" element={<OurBranches />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);