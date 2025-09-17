import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Items from "./Pages/Items";
import AddItem from "./Pages/AddItem";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
