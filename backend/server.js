import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoute from "./routes/users.js";
import messageRoute from "./routes/messages.js";
import conversationRoute from "./routes/conversations.js";
import transactionRoute from "./routes/transactions.js";

const app = express();

app.use(cors());
app.use(express.json());
// 'mongodb://localhost:27017/myapp'
// "mongodb://sltan:113344662255@ac-nbctcvc-shard-00-00.5w13s16.mongodb.net:27017,ac-nbctcvc-shard-00-01.5w13s16.mongodb.net:27017,ac-nbctcvc-shard-00-02.5w13s16.mongodb.net:27017/?ssl=true&replicaSet=atlas-11w4ws-shard-0&authSource=admin&retryWrites=true&w=majority";
// "mongodb://sltan:113344662255@cluster0.5w13s16.mongodb.net/?appName=Cluster0";
mongoose.connect("mongodb://sultan:0994119422@ac-nbctcvc-shard-00-00.5w13s16.mongodb.net:27017,ac-nbctcvc-shard-00-01.5w13s16.mongodb.net:27017,ac-nbctcvc-shard-00-02.5w13s16.mongodb.net:27017/?ssl=true&replicaSet=atlas-11w4ws-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/users", userRoute); 
app.use("/messages", messageRoute);
app.use("/conversations", conversationRoute);
app.use("/transactions", transactionRoute);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(3636, () => {
  console.log("Server running on port 3636");
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