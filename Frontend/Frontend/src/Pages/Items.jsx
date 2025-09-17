import { useEffect, useState } from "react";
import API from "../Services/api";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await API.get("/items");
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <h2>Lost & Found Items</h2>
      {items.map((item) => (
        <div key={item._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p><b>Location:</b> {item.location}</p>
          <p><b>Status:</b> {item.status}</p>
        </div>
      ))}
    </div>
  );
}
