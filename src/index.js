import express from "express";
const app = express();
import cors from "cors";
import routes from "./routes/index.js";

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});
