//React imports
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Dash from "./pages/Dash";
import NewReq from "./pages/NewReq";
import ComReq from "./pages/ComReq";
import ActiveReq from "./pages/ActiveReq";

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="App">
      <>
        <ToastContainer />
        <SideBar />
        <Routes style={{ marginRight: "20px" }}>
          <Route exact path="/" element={<Dash />} />
          <Route exact path="/newreq" element={<NewReq />} />
          <Route exact path="/comreq" element={<ComReq />} />
          <Route exact path="/activereq" element={<ActiveReq />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
