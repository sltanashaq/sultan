import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Message.find();

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const message = new Message(req.body);

    await message.save();

    res.json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;