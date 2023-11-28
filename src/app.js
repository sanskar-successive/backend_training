import express from "express";
import userRoutes from "./routes/userRoutes.js";
<<<<<<< HEAD
import createError from "http-errors";

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

const timeoutFunc = (req, res, next) => {
  let timeoutId;
  const promise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      resolve("taking time to fetch");
    }, 5000);

    setTimeout(() => {
      reject("request cannot be fulfilled");
    }, 1000);
  });
  promise
    .then((data) => res.send(data))
    .catch((err) => next(createError(408, `${err}, request timeout`)));
};

app.get("/api/timeout", timeoutFunc);
app.use((req, res, next) => {
  next(createError(404, "Invalid route, Page Not Found"));
});
app.use((err, req, res, next) => {
  console.log(err);
  if (err.status) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
const PORT = 5000;
=======
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

>>>>>>> f24ea6b51a1293ff842b8d1c3d3383d48a94eb40
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
