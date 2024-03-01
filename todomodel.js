import {DataTypes } from "sequelize";
import connection from "./db.js";
const Todo=connection.define("todo",{
    name:DataTypes.STRING,
    task_status:DataTypes.STRING,
});
export default Todo;
