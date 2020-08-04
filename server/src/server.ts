import express from "express";
import router from "./routes";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("running server on port " + PORT));
