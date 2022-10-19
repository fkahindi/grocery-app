//import {createRequire} from 'module'
import express, { urlencoded } from "express";
import db from "./config/db.config.js";
import routes from "./routes/dbRoutes.js";

import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"

import dbm from "./models/index.js"

import cors from "cors";
//const require = createRequire(import.meta.url)

const app = express();

var corsOptions = {
  origin: 'http://localhost:5001'
}

try {
  await db.authenticate();

  console.log('Database connected...');
} catch (error) {
  console.error('Database error: ',error);
}

app.use(cors(/* corsOptions */));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}))

//Simple
app.get('/',(req, res)=>{
  res.json({message:'Welcome to grocery app.'})
})

/* ****** */
 //const dbm = require ('./backend/models')

  const Role = dbm.role

  dbm.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
  });


  function initial(){
    Role.create({
      id: 1,
      name: "user"
    });

    Role.create({
      id: 2,
      name: "moderator"
    });

    Role.create({
      id: 3,
      name: "admin"
    });
  }
  // routes

app.use(authRoutes)
app.use(userRoutes)

/* ******* */
app.use('/products',routes);
app.use('/users', routes)

// set port, listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));