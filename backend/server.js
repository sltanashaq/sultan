import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoute from "./routes/uuu.js";
import messageRoute from "./routes/messages.js";
import conversationRoute from "./routes/conversations.js";
import transactionRoute from "./routes/transactions.js";

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB (من Render Environment Variables)
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Error:", err));

app.use("/users", userRoute);
app.use("/messages", messageRoute);
app.use("/conversations", conversationRoute);
app.use("/transactions", transactionRoute);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Render port fix
const PORT = process.env.PORT || 3636;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
 

// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';

// const app = express(); 
// app.use(cors()); 
// app.use(express.json());

// /* =========================
//    🔹 1. الاتصال بـ MongoDB 
// ========================= */
// mongoose.connect('mongodb://localhost:27017/myapp')
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// /* =========================
//    🔹 2. Schema + Model
// ========================= */
// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: false,
//   }, 
//   age: {
//     type: Number,
//     required: false,
//   },

// }, {
//   timestamps: true
// });


// const Aasx = mongoose.model('v', UserSchema);

// const n = new Aasx({
//   name: "Ali",
//   age: 20
// });

// await n.save();
// /* =========================
// 🔹 3. Routes (API)

// ========================= */
// const MessageSchema = new mongoose.Schema({
//   text: {
//     type: String,
//   }
// });
// const Aass = mongoose.model('😀😀😀', MessageSchema);

// const Users = mongoose.model('messages', UserSchema);
// // ✅ GET - جلب المستخدمين
// app.get('/users', async (req, res) => {
//   try {
//     const data = await Users.find();
//     const sss = await Aass.find();
//     // const ool = [sss,data]
//     // res.json(ool)
//     // console.log(ool)
//     res.json(data);
//   } catch (err) { 
//     console.log(err);
//     res.status(500).json({ error: "Error fetching users" });
//   }
// }); 

// // const aaa = new Users({ name: "nooo", age: 21 });
// // await aaa.save();
// // ✅ POST - إضافة مستخدم
// app.post('/users', async (req, res) => {
//   try {
//     console.log("BODY:", req.body); // 👈 مهم
//     const newUser = new Users(req.body);
//     const newUser2 = new Aass(req.body); 
//     await newUser.save();
//     await newUser2.save();
//     res.json("User added");
//   } catch (err) {
//     console.log("ERROR:", err); // 👈 مهم جداً
//     res.status(500).json({ error: "Error adding user" });
//   }
// });

// // ✅ DELETE - حذف مستخدم
// app.delete('/users/:id', async (req, res) => {
//   try {
//     await Users.findByIdAndDelete(req.params.id);
//     res.json("User deleted");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Error deleting user" });
//   }
// });

// /* =========================
//    🔹 4. تشغيل السيرفر
// ========================= */
// app.listen(3636, '0.0.0.0', () => {
//   console.log("Server running on port 3636");
// });