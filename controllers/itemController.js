import Item from "../models/Item.js";

// Create new item
const createItem = async (req, res) => {
  try {
    const { title, description, location, status } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: "Not authorized, user missing" });
    }

    const item = new Item({
      title,
      description,
      location,
      status,
      user: req.user._id, // ✅ Now req.user will be filled
    });

    const createdItem = await item.save();
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
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

