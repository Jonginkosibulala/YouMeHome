import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Questionier from "./pages/questionier";
import Dashboard from "./pages/dashboard";
import Bot from "./pages/bot";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/" element={<Questionier />} />
        <Route path="/b" element={<Bot />} />
      </Routes>
    </>
  );
}

export default App;
