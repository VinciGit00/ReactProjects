import logo from "./logo.svg";
import "./App.scss";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
      <Home></Home>
    </>
  );
}

export default App;
