// db.js
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("wdr1365", "root", "root", {
  host: "localhost",
  dialect: "mysql", 

  
});


(async () => {
  try {
    await sequelize.authenticate(); 
    console.log("Database connected");
  } catch (error) {
    console.error(" Unable to connect:", error);
  }
})();

module.exports = sequelize;
