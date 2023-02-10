import express from "express";
import morgan from "morgan";
import cors from "cors";

import createRouter from "./routes/create.js";
import joinRouter from "./routes/join.js";
import viewRouter from "./routes/view.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/create", createRouter)
app.use("/join", joinRouter)
app.use("/view", viewRouter)

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

