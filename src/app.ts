import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, logEvents } from "./middlewares/index.js";

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(logEvents);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
