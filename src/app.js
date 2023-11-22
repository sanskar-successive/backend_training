import express from "express";
import userRoutes from "./routes/userRoutes.js";
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

app.patch("/api/unsupported", (req, res) => {
  res.send("Not Implemented");
});

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
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
