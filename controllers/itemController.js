import Item from "../models/Item.js";

// Create new item
const createItem = async (req, res) => {
  const { title, description, location, status } = req.body;
  const item = new Item({ title, description, location, status, user: req.user._id });
  const createdItem = await item.save();
  res.status(201).json(createdItem);
};

// Get all items
const getItems = async (req, res) => {
  const items = await Item.find().populate("user", "name email");
  res.json(items);
};

// Get single item
const getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id).populate("user", "name email");
  if (item) res.json(item);
  else res.status(404).json({ message: "Item not found" });
};

// Delete item
const deleteItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (item) {
    await item.remove();
    res.json({ message: "Item removed" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

export { createItem, getItems, getItemById, deleteItem };

