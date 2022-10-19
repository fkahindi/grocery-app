export default {
  HOST:'localhost',
  USER:'root',
  PASSWORD:'fkdsii2012',
  DB:'grocery_db',
  dialect:'mysql',
  pool: {
    max:5,
    min:0,
    acquire: 30000,
    idle: 10000
  }
};
