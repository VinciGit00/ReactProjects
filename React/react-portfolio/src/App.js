import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import University from "./components/University";
import Layout from "./components/Layout";
import Work from "./components/Work";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/university" element={<University />} />
          <Route path="/job" element={<Work />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
