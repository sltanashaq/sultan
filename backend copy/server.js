import express from 'express';
import cors from 'cors';
import sul from './sul.js'
import sul2 from './sul2.js'
import repos from './repost.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/images', express.static('public'))

app.use("/text",sul)


app.listen(2026, '0.0.0.0', () => {
  console.log("Server running on port 2026");
});

