import {Sequelize} from 'sequelize';

const db = new Sequelize('grocery_db', 'root','fkdsii2012',{
  host:'localhost',
  dialect:'mysql'
});
export default db;