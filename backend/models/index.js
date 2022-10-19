import config from '../config/dbm.config.js';
import userModel from '../models/user.model.js';
import roleModel from '../models/role.model.js';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const dbm = {};

dbm.Sequelize = Sequelize;
dbm.sequelize = sequelize;

dbm.user = userModel(sequelize, Sequelize);
dbm.role = roleModel(sequelize, Sequelize);

dbm.role.belongsToMany(dbm.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
dbm.user.belongsToMany(dbm.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

dbm.ROLES = ["user", "admin", "moderator"];

export default dbm;
