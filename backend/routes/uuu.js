import express from "express";
import User from "../models/user2.js";

const router = express.Router();

// جميع المستخدمين
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
// hhhhhhhhhhhhhhhhhhhhhhhhhhhh
// مستخدم واحد
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// إنشاء حساب
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();

  res.json(user);
});

// تعديل المستخدم
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(user);
});

// حذف المستخدم
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.json("Deleted");
});

export default router;