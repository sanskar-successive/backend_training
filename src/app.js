import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, logEvents } from "./middlewares/index.js";


const app = express();
app.use(express.json());
app.use(logEvents);

// app.post("/login", (req, res) => {
//   res.send('abcd')
// });

app.use("/api/users", userRoutes);
const PORT = 5000;

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
