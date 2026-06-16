import express from "express";
import Conversation from "../models/Conversation.js";

const router = express.Router();

// المحادثات
router.get("/", async (req, res) => {
  const conversations =
    await Conversation.find();

  res.json(conversations);
});

// إنشاء محادثة
router.post("/", async (req, res) => {
  const conversation =
    new Conversation(req.body);

  await conversation.save();

  res.json(conversation);
});

export default router;