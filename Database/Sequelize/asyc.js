// Sync.js
const sequelize = require("./db");
const User = require("./Model/user"); 

(async () => {
  try {
    await sequelize.sync({ force: true }); 
    console.log(" Database & tables created!");
  } catch (err) {
    console.error(" syncing DB:", err);
  } finally {
    await sequelize.close();
  }
})();
