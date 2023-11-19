// import express from 'express'
// import cookieParser from 'cookie-parser'
// import { mockData } from './mockData.js';

// const app = express();
// const PORT = 5000;

// app.use(cookieParser())

// app.get('/', (req, res)=>{
//     res.send(mockData)
// })
// app.listen(PORT, ()=>{
//     console.log(`server listening on port ${PORT}`)
// })

import express from "express";
import data from "./dataSeeder.json" assert { type: "json" };
import fs from "fs";
import { authenticate } from "./authMiddleWare.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("hi");
});

app.use('/data', authenticate)

app.get("/data", (req, res) => {
//   data.push(req.newData);
  return res.status(200).json(data);
});

app.get("/data/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const item = data.find((item) => item.id === parseInt(id));
  if (item) return res.json(item);
  else return res.status(404).json({ error: "user not found" });
});

app.post("/data", authenticate, (req, res) => {
  let newData = req.body;
  newData = { ...newData, id: data.length + 1 };
  data.push(newData);
  fs.writeFile("./dataSeeder.json", JSON.stringify(data), (err) => {
    console.log("some error occured");
  });
  return res.status(201).json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
