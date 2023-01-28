import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cities from "./routes/cities.js";
import shipperinfo from "./routes/shipperinfo.js";

dotenv.config();

const app = express();

// Middlewares

app.use(cors());
app.use(express.json());

// Routes

app.use('/api/cities', cities);
app.use('/api/shipper', shipperinfo);

// Connection to Server

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running at http://loclahost:${PORT}`);
})