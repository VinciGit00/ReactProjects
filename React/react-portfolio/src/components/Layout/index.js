import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/";
import "./index.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <div></div>
        <span className="tags bottom-tags">
          <br />
        </span>
      </div>
    </div>
  );
};

export default Layout;
