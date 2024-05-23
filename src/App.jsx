import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Proposal from "./screens/Proposals/Proposals";
import Issued from "./screens/Issued/Issued";
import DashBoard from "./screens/Dashboard/Dashboard";
import InwardForm from "./Components/Forms/InwardForm";

function App() {

  return (
    <>
      <Header />
      <div className="main_body">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/proposal/issued" element={<Issued />} />
            <Route path="/issued" element={<Issued />} />
            <Route path="/inwardForm" element={<InwardForm/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
