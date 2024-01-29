// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CandidateForm from "./components/CandidateForm/CandidateForm";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/candidate/new" element={<CandidateForm />} />
        <Route path="/candidate/:id" element={<CandidateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
