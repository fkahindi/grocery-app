import { Sequelize } from "sequelize";

import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
  firstname:{
    type:DataTypes.STRING
  },
  lastname:{
    type:DataTypes.STRING
  },
  role_id:{
    type:DataTypes.INT
  },
  email:{
    type:DataTypes.STRING
  },
  password:{
    type:DataTypes.STRING
  }
},{
  freezeTableName:true
});
export default User;