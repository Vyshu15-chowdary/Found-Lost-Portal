import { useState } from "react";
import API from "../Services/api";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const [form, setForm] = useState({ title: "", description: "", location: "", status: "lost" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    await API.post("/api/items", form);
    navigate("/items");
    } catch(error){
      console.error("error adding item:",error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />
      <select onChange={(e) => setForm({ ...form, status: e.target.value })}>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}
