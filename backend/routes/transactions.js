import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// جميع التحويلات
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json(err);
  }
});

// إضافة تحويل جديد
router.post("/", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();

    res.json(transaction);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;