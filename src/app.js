import express from "express";
import userRoutes from "./routes/userRoutes.js";
import createError from "http-errors";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  next(createError(404, "Invalid route, Page Not Found"));
});

app.use((err, req, res, next) => {
  console.log(err);
  if(err.status){
    res.status(err.status).json({message : err.message})
  }
  else{
    res.status(500).json({message : "Internal Server Error"})
  }

});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
