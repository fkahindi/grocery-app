import express from "express";
import db from "./config/database.js";
import routes from "./routes/dbRoutes.js";

import cors from "cors";

const app = express();

try {
  await db.authenticate();

  console.log('Database connected...');
} catch (error) {
  console.error('Database error: ',error);
}

app.use(cors());
app.use(express.json());
app.use('/products',routes);
app.use('/users', routes)

app.listen(5000,()=>console.log('Server is running on port 5000'));