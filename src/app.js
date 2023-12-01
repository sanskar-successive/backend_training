import express from "express";

import { errorHandler, logEvents } from "./middlewares/index.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(logEvents);
app.use("/api/users", userRoutes);
app.use('/api/auth', authRoutes);
app.use((req,res,next)=>{
  res.json("page not found")
})
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});