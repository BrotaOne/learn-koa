import Sequelize from "sequelize";
import {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DB,
} from "../config/index.js";

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: "mysql",
    port: MYSQL_PORT,
});


module.exports = seq;