import express from "express";
import {
  createItem,
  getItems,
  getItemById,
  deleteItem,
} from "../controllers/itemController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getItems).post(protect, createItem);
router.route("/:id").get(getItemById).delete(protect, deleteItem);

export default router;

