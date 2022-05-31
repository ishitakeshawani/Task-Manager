import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ToDoListPage from "./pages/ToDoListPage/ToDoListPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todopage" element={<ToDoListPage />} />
      </Routes>
    </div>
  );
}

export default App;
