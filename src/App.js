import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="projectdetails/:id" element={<ProjectDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
