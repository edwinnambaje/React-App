import { Route, Routes} from "react-router";
import Layout from "./components/layouts/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;