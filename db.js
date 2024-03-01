//IT CREATE CONNECTION USING SEQUELIZE  
import { Sequelize } from "sequelize";
const connection = new Sequelize('react','root','admin',{
    dialect: "mysql",
    host: "localhost",
    port: 3306,
});
console.log("hello hi")
export default connection;


