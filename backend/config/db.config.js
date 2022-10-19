import {Sequelize} from 'sequelize';

const db = new Sequelize('grocery_db', 'root','fkdsii2012',{
  host:'localhost',
  dialect:'mysql',
  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle: 10000
  }
});
export default db;