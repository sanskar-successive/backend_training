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

// import express from "express";
// import data from "./apiData.json" assert { type: "json" };
// import fs from "fs";
// // import { authenticate } from "./authMiddleWare.js";

// const app = express();
// app.use(express.json());

// app.get("/", (req, res) => {
//   return res.send("hi");
// });

// // app.use('/data', authenticate)

// app.get("/data", (req, res) => {
//   return res.status(200).json(data);
// });

// app.get("/data/:id", (req, res) => {
//   const { id } = req.params;
//   const item = data.find((item) => item.id === parseInt(id));
//   if (item) return res.json(item);
//   else return res.status(404).json({ error: "user not found" });
// });

// app.post("/create",(req, res) => {
//   let newData = req.body;
//   data.push(newData);
//   fs.writeFile("./apiData.json", JSON.stringify(data), (err) => {
//     console.log("some error occured");
//   });
//   return res.status(201).json(data);
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`server listening on port ${PORT}`);
// });


import express from 'express'
import userRoutes from './src/routes/userRoutes.js'


const app = express();

app.use(express.json());


app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})